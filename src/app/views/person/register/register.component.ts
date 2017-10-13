import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {AppService} from '../../../app.service';
import {mobileValidator} from '../../../validator/validators';
import {AlertService} from '../../../components/alert/alerts.service';
import {Services} from '../../../api/index.service';
import {whele} from '../../../util/whale'; //鲸鱼动画

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private formModelRegister: FormGroup;

    private fb = new FormBuilder();

    constructor(public router: Router, private appService: AppService, private alert: AlertService, private services: Services) {
        this.appService.titleEventEmitter.emit('注册页面');
    }

    ngOnInit() {

        this.formModelRegister = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(2)]],
            phone: ['', mobileValidator],
            password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(8)]]
        });


        whele();
    }

    onSubmit() {
        var self = this;
        if (this.formModelRegister.valid) {
            //console.log(this.formModelRegister.value);
            this.services.register(self.formModelRegister.value).subscribe((res) => {
                if (res.status === 0) {
                    this.alert.message('恭喜注册成功', 'success', 2, () => {
                        this.router.navigateByUrl('/login');
                    });
                } else {
                    this.alert.message(res.message, 'error');
                }
            }, error => {
                console.log(error);
            });
        }
    }

}
