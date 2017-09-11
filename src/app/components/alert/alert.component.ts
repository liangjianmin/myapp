import {Component, OnInit} from '@angular/core';
import {AlertsConfig} from './alerts.config';
import {AlertService} from './alerts.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    public messages: Object[] = [];
    public alertclass;
    public styles;
    public settings;
    public classname: string;


    constructor(private alerts: AlertService) {
        this.classname = '';
        this.alertclass = new AlertsConfig();
        this.settings = this.alertclass.setSettings();

    }

    ngOnInit() {
        this.alerts.alertsObs.subscribe((object) => {
            this.classname = '';
            object['styles'] = this.alertclass.getstyles(object['type']);
            this.messages.push(object);
            if (object['timeout'] > 0) {
                setTimeout(() => {
                    this.classname = 'fadeOut';
                    setTimeout(() => {
                        this.removeMessage(object);
                        object['callback'] = this.callback(object['callback']);
                    }, 500);
                }, object['timeout'] * 1000);
            }

        });

    }

    removeMessage(message: Object) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

    callback(fn: any) {
        if (fn) {
            return fn();
        }
    }

}
