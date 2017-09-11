import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/Rx';
import {AppService} from '../../../app.service';
import {mobileValidator} from '../../../validator/validators';
import {AlertService} from '../../../components/alert/alerts.service';
import {Services} from '../../../api/index.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private formModelRegister: FormGroup;

    private fb = new FormBuilder();

    constructor(private appService: AppService, private alert: AlertService, private services: Services) {
        this.appService.titleEventEmitter.emit('注册页面');
    }

    ngOnInit() {

        this.formModelRegister = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(2)]],
            phone: ['', mobileValidator],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

    }

    onSubmit() {
        var self = this;
        if (this.formModelRegister.valid) {
            console.log(this.formModelRegister.value);
            this.services.register(self.formModelRegister.value).subscribe((res) => {
                this.alert.message('恭喜您：' + res.username + ' 注册成功', 'success');
            }, error => {
                console.log(error);
            });

        }
    }

}
