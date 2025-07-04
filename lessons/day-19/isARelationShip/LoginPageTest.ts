import ExernalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./InternalLoginPage";
import LoginPage from "./LoginPage";
import LoginTestFlow from "./LoginTestFlow";

let internalLoginPage: LoginPage = new InternalLoginPage();
let externalLoginPage: LoginPage = new ExernalLoginPage();

let internalLoginData = {
    username: "teo",
    password: "123456Zz!"
};

let externalLoginData = {
    username: "ti",
    password: "123456Zz!"
};

LoginTestFlow.login(internalLoginPage, internalLoginData.username, internalLoginData.password);
LoginTestFlow.login(externalLoginPage, externalLoginData.username, externalLoginData.password);