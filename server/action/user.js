var user = require("../models/user.js");
var moment = require('moment');
var crypto = require('crypto');


module.exports = function (app) {

    /**
     * 登录
     */
    app.post('/login', function (req, res, next) {


    });

    /**
     * 注册
     */
    app.post('/register', function (req, res, next) {
        let username = req.body.username;
        let password = req.body.password;
        let phone = req.body.phone;

        if (username && password & phone) {
            res.send({username: username, password: password, phone: phone});
        } else {
            res.send('啊哦，出错了');
        }


    });

    /**
     * 获取当前登录用户
     */
    app.get('/user', function (req, res, next) {


    });


}