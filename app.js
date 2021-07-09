let passport = require('passport');
var app = express();
var server = require('http').createServer(app);
let session      = require('express-session');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


let session_middleware = session({
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false, // false to prevent interference with concurrency
    saveUninitialized: true,
    maxAge: 86400000, // session expires after 24 hours
})


require('./config/passport')(passport);


app.use(session_middleware);
app.use(passport.initialize());
app.use(passport.session());

//setting up mongodb
var db = require('./config/mongo/index');
db();


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.log(err);
    res.render(path.join(__dirname, 'public/html/', '404.hbs'));
});
  
server.listen(port, function(err) {
    if (err) {
      console.log(`Something went wrong!`);
    }
    else  {
      console.log(`Server listening on port ${port}`);
    }
});

  
module.exports = app;