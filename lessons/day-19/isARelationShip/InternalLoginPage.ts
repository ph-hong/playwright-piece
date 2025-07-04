import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {

    private usernameSel = "#in-username";
    private passwordSel = "#password";
    private loginBtnSel = "#loginBtn";

    public inputUsername(username: string): void {
        console.log(`1. Input username: ${username} for selector ${this.usernameSel}`);
    }

    public inputPassword(password: string): void {
        console.log(`2. Input password: ${password} for selector ${this.passwordSel}`);
    }
    
    public clickOnLoginBtn(): void {
        console.log(`3. Click on the Login button for selector ${this.loginBtnSel}`);
    }

}