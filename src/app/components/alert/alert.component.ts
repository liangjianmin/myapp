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
    public callbacks;



    constructor(private alerts: AlertService) {
        this.alertclass = new AlertsConfig();
        this.settings = this.alertclass.setSettings();

    }

    ngOnInit() {
        this.alerts.alertsObs.subscribe((object) => {
            object['styles'] = this.alertclass.getstyles(object['type']);
            this.messages.push(object);
            console.log(object)
            if (this.settings.timeout > 0) {
                setTimeout(() => {
                    object['callback']=this.alertclass.callbackfun();
                    this.removeMessage(object);
                    console.log(object)
                }, this.settings.timeout * 1000);
            }


        });

    }

    removeMessage(message: Object) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}
