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

      // public  公开的
      // private 私有的
      // protected 对子女/朋友来说是public 对外部的class是private
    constructor(public router: Router, private appService: AppService,private services:Services,private alertService:AlertService ) {
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
              _self.services.login(_self.formModelLogin.value).subscribe((res)=>{
                console.log(res.status)
                if(res.status === '200' ){
                    _self.router.navigateByUrl('/index')
                }else {
                  _self.alertService.message(res.message,'error')
                }
              },error =>{
                _self.alertService.message(error,'error')
              } )
















        }
    }
}
