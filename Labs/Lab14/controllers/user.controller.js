const path = require('path');
const User = require(path.join(__dirname, '..', 'models', 'user.model.js'));

exports.getAuthLogin = (req, res) => {
    const user = req.session.user ? req.session.user : null;
    res.render('login', {
        user
    });
};

exports.login = (req, res) => {
    if (User.login(req.body.email, req.body.password)) {
        req.session.user = req.body.username;
        res.redirect('/');
    } else {
        res.redirect('/auth/login');
    }
}

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login');
    });
}