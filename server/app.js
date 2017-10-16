var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var connect = require('connect');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

//设置跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.sendStatus(200);
    else  next();
});

//中间件定义
app.use(favicon("./favicon.ico"))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());  //设置session   || session是将客户端信息以某种形式记录在服务器上
app.use(session({
    secret: 'appuser',
    name: 'user',  //在response 中sessionID这个cookie的名称。
    cookie: {maxAge: 3600000 * 24 * 30},
    resave: false, //强制session保存到session st
    saveUninitialized: true
}));

//静态资源
app.use(express.static(path.join(__dirname, './static')));

routes(app);

app.get('*', function (req, res) {
    res.render('404.html', {
        title: 'No Found'
    })
});

app.listen(3000, function () {
    console.log('listen 3000')
});


