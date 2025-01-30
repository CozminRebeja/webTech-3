const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const app = express();
const port = 6969;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Handle file uploading
app.use(fileUpload({ createParentPath: true }));

// Session middleware
app.use(
  session({
    secret: 'user-admin-123',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Set view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
const userRoute = require('./routes/user');
const addUserRoute = require('./routes/addUser');
const showUsersRoute = require('./routes/allUsers');
const authRoute = require('./routes/auth');

app.use('/', indexRouter);
app.use('/user', userRoute);
app.use('/add', addUserRoute);
app.use('/all', showUsersRoute);
app.use('/auth', authRoute);

// Start server
app.listen(port, () => {
  console.log(`App ready at http://localhost:${port}`);
});
