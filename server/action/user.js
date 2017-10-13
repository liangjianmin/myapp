var user = require("../models/user");
var userservice = require("../service/user");
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

        if (username && password && phone) {
            //判断用户手机是否注册
            userservice.isExistUser(phone).then((value) => {
                if (!value) {
                    //加密密码
                    password = crypto.createHash('md5').update(password.toString()).digest('hex');
                    //保存用户数据
                    user.saveUser({
                        data: {
                            username: username,
                            password: password,
                            phone: phone,
                            create_time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
                        },
                        sql: "INSERT INTO users SET ?"
                    }, function (data) {
                        res.send({message: '注册成功', data: {id: data.id}, status: 0});
                    });
                } else {
                    res.send({message: '该手机号已经注册', data: {}, status: 1});
                }
            })

        } else {
            res.send({message: '字段缺失', data: {}, status: 1});
        }

    });

    /**
     * 获取当前登录用户
     */
    app.get('/user', function (req, res, next) {


    });


}