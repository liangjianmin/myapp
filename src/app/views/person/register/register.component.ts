import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../../app.service';
import {mobileValidator} from '../../../validator/validators';
import {AlertService} from '../../../components/alert/alerts.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    formModelRegister: FormGroup;

    public fb = new FormBuilder();

    constructor(private appService: AppService, private alert: AlertService) {
        this.appService.titleEventEmitter.emit('注册页面');
    }

    ngOnInit() {

        this.formModelRegister = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(2)]],
            mobile: ['', mobileValidator],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

    }

    onSubmit() {
        if (this.formModelRegister.valid) {
            console.log(this.formModelRegister.value);
        }
    }

    msg() {
        this.alert.message('这是一个demo', 'success',function (a) {
            alert('212')
        });
    }

}
