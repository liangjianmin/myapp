var user = require("../models/user.js");


module.exports = {

    /**
     * 判断用户手机是否注册
     * @param phone
     */
    isExistUser: function (phone) {
        return new Promise(function (resolve, reject) {
            user.getUserExist(phone, function (data) {
                if (data.status && data.data.length > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
        })
    }
}