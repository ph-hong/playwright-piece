class Post {
    constructor(userId, postId, title, body) {
        this._userId = userId;
        this._postId = postId;
        this._title = title;
        this._body = body;
    }

    get userId() {
        return this._userId;
    }

    get postId() {
        return this._postId;
    }

    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }

    set userId(userId) {
        this._userId = userId;
    }

    set postId(postId) {
        this._postId = postId;
    }

    set title(title) {
        this._title = title;
    }

    set body(body) {
        this._body = body;
    }

    printPost() {
        console.log(
`1. userId: ${this._userId}
2. postId: ${this._postId}
3. postTile: ${this._title}
4. postBody: ${this._body}
`
        )
    }
}

module.exports = Post;
