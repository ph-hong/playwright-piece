/**
 url: https://jsonplaceholder.typicode.com
Library: fetch
slugs: GET /posts

Please using PROMISE and ASYNC/AWAIT to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user
 */

const readline = require(`readline-sync`);
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

app();

async function app() {
    let isOpening = true;

    while (isOpening) {
        await handleAsyncAwait();
        break;
    }
}

async function handleAsyncAwait() {
    let isOpening = true;

    // if (!isOpening) return;

    printMenu();
    const userOption = await getUserOption();

    switch (userOption) {
        case 1:
            await handleGetAllPostsFromUser();
            break;
        case 2:
            await handleGetPostContent();
            break;
        case 0:
            isOpening = false;
            console.log('Exiting the app...');
            break;
        default:
            console.log('Invalid input. Enter again...');
            break;
    }

    if (isOpening) {
        await handleAsyncAwait();
    }
}

function printMenu() {
    console.log(
        `
        === App Option ===
        1. Get all posts from a user
        2. Get a post contents
        0. Exist
        `
    )
}

async function getUserOption() {
    const userOption = Number(readline.question('Enter your option: '));
    return userOption;
}

async function handleGetAllPostsFromUser() {
    const userId = Number(readline.question('Enter User ID: '));
    const posts = await getAllPostsFromUser(userId);

    if (posts.length > 0) {
        console.log("All posts: ", posts);
    } else {
        console.log(`No posts found for User ID ${userId}. Please try again!`);
    }
}

async function handleGetPostContent() {
    const postId = Number(readline.question('Enter Post ID: '));
    const postContent = await getPostById(postId);

    if (postContent.length > 0) {
        console.log("Post content: ", postContent);
    } else {
        console.log(`Post ID - ${postId} not found!`);
    }
}

async function getAllPostsFromUser(userId) {
    const response = await fetch(USER_ENDPOINT);
    const allUsers = await response.json();

    let hasUser = false;
    for (const user of allUsers) {
        if (user.id === userId) {
            hasUser = true;
            break;
        }
    }

    if (hasUser) {
        const postResponse = await fetch(POST_ENDPOINT);
        const allPosts = await postResponse.json();

        return allPosts.filter(post => post.userId === userId);
    } else {
        console.log(`User ID ${userId} not found!`);
        return [];
        // process.exit(1);
    }
}

async function getPostById(postId) {
    const response = await fetch(POST_ENDPOINT);
    const allPosts = await response.json()

    return allPosts.filter(post => post.id === postId);

}
