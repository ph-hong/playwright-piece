/**
 url: https://jsonplaceholder.typicode.com
Library: fetch
slugs: GET /posts

Please using PROMISE and thenable to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user
 */

const readline = require(`readline-sync`);
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

app();

function app() {
    let isOpening = true;

    while (isOpening) {
        handlePromise();
        break;
    }

    function handlePromise() {
        if (!isOpening) return;

        printMenu();
        getUserOption().then((userOption) => {
            switch (userOption) {
                case 1:
                    return handleGetAllPostsFromUser();
                    break;
                case 2:
                    return handleGetPostContent();
                    break;
                case 0:
                    isOpening = false;
                    console.log('Existing the app...')
                    return Promise.resolve();

                default:
                    console.log('Invalid input. Enter again...');
                    return Promise.resolve();
            }
        }).then(handlePromise);
    }
}

function printMenu() {
    console.log(
        `
        === App Option ===
        1. Get all posts from a user
        2. Get a post content
        0. Exist
        `
    )
}

function getUserOption() {
    return new Promise(function (resolve) {
        const userOption = Number(readline.question('Enter your option: '));
        resolve(userOption);
    })
}

function handleGetAllPostsFromUser() {
    return new Promise(function (resolve) {
        const userId = Number(readline.question('Enter User ID: '));

        getAllPostsFromUser(userId).then(function (posts) {
            if (posts.length > 0) {
                console.log("All posts: ", posts);
            } else {
                console.log(`No posts found for User ID ${userId}. Please try again!`);
            }
            resolve();
        })
    })
}

function handleGetPostContent() {
    return new Promise(function (resolve) {
        const postId = Number(readline.question('Enter Post ID: '));

        getPostById(postId).then(function (postContent) {
            if (postContent.length > 0) {
                console.log("Post content: ", postContent);
            } else {
                console.log(`Post ID - ${postId} not found!`);
            }
            resolve();
        })
    })
}

function getAllPostsFromUser(userId) {
    return fetch(USER_ENDPOINT)
        .then(function (response) {
            return response.json();
        })
        .then(function (allUsers) {
            let hasUser = false;
            for (const user of allUsers) {
                if (user.id == userId) {
                    hasUser = true;
                    break;
                }
            }
            if (hasUser) {
                return fetch(POST_ENDPOINT)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (allPosts) {
                        return allPosts.filter(function (post) {
                            return post.userId === userId;
                        });
                    });
            } else {
                console.log(`Uer ID ${userId} not found!`)
                return [];
                // process.exit(1);
            }
        });
}

function getPostById(postId) {
    return fetch(POST_ENDPOINT)
        .then(function (response) {
            return response.json();
        })
        .then(function (allPosts) {
            return allPosts.filter(function (post) {
                return post.id === postId;
            });
        });
}
