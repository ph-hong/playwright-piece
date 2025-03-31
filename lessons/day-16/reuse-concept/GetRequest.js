//Child Class / Sub Class /  Derived Class

const Request = require('./Request');

class GetRequest extends Request {
    // class variable
    static id = 1;

    constructor(url, method = 'GET') {
        super();
        this._url = url;
        super.setMethod(method);
    }

    // //Overiding the parent class method
    // setMethod() {
    //     super.setMethod('GET')
    // }
    // =>  B/c creating a contructor -> so delete this code

    newMethod() {
        console.log('This is a new method')
    }
}

let getRequest = new GetRequest();

//Reuse 100%
getRequest.sentRequest();
getRequest.verifyResponse();
getRequest.newMethod();

console.log(GetRequest.id);