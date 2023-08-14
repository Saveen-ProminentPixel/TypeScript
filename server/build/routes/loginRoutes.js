"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
    <div>
    <label>Email</label>
    <input name="email" />
    </div>
    <div>
    <label>Password</label>
    <input name="password" type="password" />
    </div>
    <button>Submit</button>
    </form>
    `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === "name@email.com" && password === "123456") {
        //mark this person as logged in
        req.session = { loggedIn: true };
        //redirect them to the root route
        res.redirect('/');
    }
    else {
        res.send("Invalid Email or Password");
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
        <div>
        <div>You are logged in</div>
        <a href="/logout">LogOut</a>
        </div>
        `);
    }
    else {
        res.send(`
        <div>
        <div>You are not logged in</div>
        <a href="/login">LogIn</a>
        </div>
        `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send("Welcome to protected route, logged in user");
});
