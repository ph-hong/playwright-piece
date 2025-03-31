//Child Class / Sub Class /  Derived Class

const Request = require('./Request');

class GetRequest extends Request {

    //Overiding the parent class method
    setMethod() {
        super.setMethod('GET')
    }

    newMethod() {
        console.log('This is a new method')
    }

}

let getRequest = new GetRequest();
getRequest.setMethod();

//Reuse 100%
getRequest.sentRequest();
getRequest.verifyResponse();