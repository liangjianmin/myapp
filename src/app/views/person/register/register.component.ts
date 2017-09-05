import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private appService: AppService) {
        this.appService.titleEventEmitter.emit('注册页面');
    }

    ngOnInit() {

    }

}
