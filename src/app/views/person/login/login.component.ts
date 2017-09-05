import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService) {
      this.appService.titleEventEmitter.emit('登录页面');
  }

  ngOnInit() {
  }

}
