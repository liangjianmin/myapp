import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';


export function mobileValidator(control: FormControl): any {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(control.value);
    return valid ? null : {phone: true};
}


