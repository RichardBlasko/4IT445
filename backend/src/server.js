import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import cookieParser from 'cookie-parser';
import session from 'express-session';
import morgan from 'morgan';
import Users from './models/users';
import bcrypt from 'bcryptjs';

import rootRoutes from './rootRoutes';
import modelIndex from './models/index';

var path = require('path');

export const app = express();

app.use(bodyParser.json());
app.use(cors());

/*
// !!!!TOHLE CELE SI OPRAV!!!
// ROUTES se resi ve file rootRoutes a pak pripadne v danych controlerech.
//Touhle prasarnou jsi rozbil vsechno ostatni, takze ti to zatim davam do komentare.
//Otestuj si poradne, ze funguji api/ endpointy, nez neco pushnes na GIT, tedy GET api/diagnozy apod...


// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'Users_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.Users_sid && !req.session.Users) {
        res.clearCookie('Users_sid');
    }
    next();
});


// middleware function to check for logged-in Users
var sessionChecker = (req, res, next) => {
    if (req.session.Users && req.cookies.Users_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }
};


// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
    res.redirect('/login_prototype');
});


// route for user signup
app.route('/signup')
    .get(sessionChecker, (req, res) => {
        //res.sendFile(__dirname + '/../public/signup.html');
        //res.sendFile(path.join(__dirname, '../public', 'signup.html'));
        //res.sendFile('../public/signup.html', {root: __dirname});
        res.sendFile('public/signup.html', {root: path.dirname(__dirname)});
    })
    .post((req, res) => {
        //console.log('pokyn',Users)

        modelIndex.Users.create({
            login: req.body.login,
            password: req.body.password
        })
        .then(Users => {
            req.session.Users = Users.dataValues;
            res.redirect('/dashboard');
        })

        .catch(error => {
            console.log('chyba',error);
            res.redirect('/signup');
        });
    });


// route for user Login
app.route('/login_prototype')
    .get(sessionChecker, (req, res) => {
        //res.sendFile(__dirname + '/../public/login.html');
        //res.sendFile(path.join(__dirname, '../public', 'login.html'));
        //res.sendFile('../public/login.html', {root: __dirname});
        res.sendFile('public/login_prototype.html', {root: path.dirname(__dirname)});
    })
    .post((req, res) => {
        var login = req.body.login,
            password = req.body.password;

        modelIndex.Users.findOne({ where: { login: login } }).then(function (Users) {
            if (!Users) {
                res.redirect('/login_prototype');
            } else if (!Users.validPassword(password)) {
                res.redirect('/login_prototype');
            } else {
                req.session.Users = Users.dataValues;
                res.redirect('/dashboard');
            }
        });
    });


// route for user's dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.Users && req.cookies.Users_sid) {
        //res.sendFile(__dirname + '/../public/dashboard.html');
        //res.sendFile(path.join(__dirname, '../public', 'dashboard.html'));
        //res.sendFile('../public/dashboard.html', {root: __dirname});
        res.sendFile('public/dashboard.html', {root: path.dirname(__dirname)});
    } else {
        res.redirect('/login_prototype');
    }
});


// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.Users && req.cookies.Users_sid) {
        res.clearCookie('Users_sid');
        res.redirect('/');
    } else {
        res.redirect('/login_prototype');
    }
});


// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});
*/
if (__DEV__) {
  app.use(express.static('public'));
}

app.use(rootRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.json({ error: '404: Not found' });
});
