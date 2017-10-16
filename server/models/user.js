var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {

    /**
     * 查询用户
     * @param p 分页条数
     * @param limit 分页限制
     * @param callback
     */
    getUsers: function (p, limit, callback) {
        sql = "select * from users limit " + p + "," + limit;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 查询指定id用户
     * @param id
     * @param callback
     */
    getUser: function (id, callback) {
        sql = "select * from users where id=" + id;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 查询用户手机是否注册
     * @param phone
     * @param callback
     */
    getUserExist: function (phone, callback) {
        sql = "select * from users WHERE phone='" + phone + "' ";
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 查询用户注册数量
     * @param callback
     */
    getUsersCount: function (callback) {
        sql = 'select count(1) count from users';
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 更新用户
     * @param data
     * @param callback
     */
    updateUser: function (data, callback) {
        mysqlDB.updateTable(data, callback)
    },
    /**
     * 删除用户
     * @param data
     * @param callback
     */
    deleteUser: function (data, callback) {
        mysqlDB.deleteTable(data, callback);
    },
    /**
     * 新增用户
     * @param data
     * @param callback
     */
    saveUser: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
    /**
     * 用户登录
     * */
    getUserPassword:function (username, callback) {
      sql="SELECT * FROM users WHERE phone='"+username+"' or email='"+username+"'";
      mysqlDB.getTableAllInfo({sql:sql},callback)

    }




};
