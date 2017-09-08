"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mobileValidator(control) {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var valid = myreg.test(control.value);
    return valid ? null : { mobile: true };
}
exports.mobileValidator = mobileValidator;
