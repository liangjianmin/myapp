import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {AppService} from '../../../app.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, private appService: AppService) {
        this.appService.titleEventEmitter.emit('登录页面');
    }

    ngOnInit() {

    }

}
