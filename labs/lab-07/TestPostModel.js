// TestPostModel.js
const Post = require("./Post");
const readline = require('readline-sync');
const RequestHandler = require("./RequestHandler");

// Execution
lab06();

// Function Declaration
async function lab06() {
    // Given params
    const userId = 10;
    const postId = 100;
    // const userId = Number(readline.question('Enter User ID: '));
    // const postId = Number(readline.question('Enter Post ID: '));

    // Create RequestHandler object
    const postHandler = new RequestHandler();
    const targetPost = await postHandler.printTargetPost(userId, postId);
    const allPostsByUserId = await postHandler.printAllPosts(userId)
}
