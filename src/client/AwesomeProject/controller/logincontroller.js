export default class LoginController {
    static check(username, password) {
        if (username === '1' && password === '1') {
            return true;
        }
        return false;
    }
}