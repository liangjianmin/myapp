import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {AppService} from '../../../app.service';
import {AlertService} from '../../../components/alert/alerts.service';

import {mobileValidator} from '../../../validator/validators';
import {Services} from '../../../api/index.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private formModelLogin:FormGroup;

    private fb = new FormBuilder();


    constructor(public router: Router, private appService: AppService) {
        this.appService.titleEventEmitter.emit('登录页面');
    }

    ngOnInit() {
      this.formModelLogin=this.fb.group({
        phone:['',[Validators.required,Validators.minLength(6)]],
        password:['',[Validators.required,Validators.minLength(6)]]
      })

    }
    onSubmit(){
        var _self=this;
        if(_self.formModelLogin.valid){

        }
    }
}
