// Parent Class / Super Class / Base Class

class Request {
    constructor(url, headers = {}) {
        this._url = url;
        this.headers = headers;
        this.method = '';
    }

    setMethod(method) {
        this.headers = { ...this.headers, method: method };

    };

    sentRequest() {
        console.log(`Sending request with the headers: ${JSON.stringify(this.headers)}`);

    }

    verifyResponse() {
        console.log('Verifying response ...')

    }
}

module.exports = Request;