const Post = require("./Post");
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

class RequestHandler {

    async printTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post -> tra ve object
        const allPostsFromUser = await this._getAllPosts(userId);
        const foundPostByPostId = allPostsFromUser.find(post => post.id === postId);

        if (foundPostByPostId) {
            const postModel = new Post(foundPostByPostId.userId, foundPostByPostId.id, foundPostByPostId.title, foundPostByPostId.body);
            console.log("========TARGET POSTS========")
            postModel.printPost();
        } else {
            console.log(`\n Post ID ${postId} not exist! \n`)
        }
    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post -> tra ve array
        const allPostsFromUser = await this._getAllPosts(userId);
        const posts = [];

        for (const post of allPostsFromUser) {
            const postModel = new Post(post.userId, post.id, post.title, post.body);
            posts.push(postModel);
            // console.log("Post Model:", postModel);
            console.log("========ALL POSTS BY USER ID========")
            postModel.printPost();
        }

        if (posts.length === 0) {
            console.log(`\n No posts found for User ID ${userId} \n`);
        }
    }

    async _getAllPosts(userId) {
        const postResponse = await fetch(POST_ENDPOINT);
        const allPosts = await postResponse.json();

        const foundPostsByUserId = allPosts.filter(post => post.userId === userId);

        if (foundPostsByUserId.length === 0) {
            console.log(`\n User ID ${userId} does not exist! \n`);
            return [];
        }

        return foundPostsByUserId;
    }
}

module.exports = RequestHandler;
