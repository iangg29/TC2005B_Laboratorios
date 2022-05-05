const users = [];

module.exports = class User {
    constructor(email, password, username){
        this.email = email;
        this.password = password;
        this.username = username;
    }

    save() {
        if (!this.email || !this.password || !this.username) {
            console.error('Error: User must have an email, password and username');
            return false;
        }
        if (users.find(user => user.email === this.email)) {
            console.error('Error: User already exists');
            return false;
        }
        users.push(this);
        console.log('User saved');
    }

    static login(email, password) {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            return true;
        } else {
            const newUser = new User(email, password, email);
            newUser.save();
            return true;
        }
    }
}