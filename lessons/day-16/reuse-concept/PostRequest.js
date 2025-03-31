//Child Class / Sub Class /  Derived Class

const Request = require('./Request');

class PostRequest extends Request {

    //Overiding the parent class method
    setMethod() {
        super.setMethod('POST')
    }

    newMethod() {
        console.log('This is a new method')
    }

}

let postRequest = new PostRequest();
postRequest.setMethod();

//Reuse 100%
postRequest.sentRequest();
postRequest.verifyResponse();