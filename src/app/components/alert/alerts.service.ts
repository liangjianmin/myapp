import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export interface AlertsInterface {
    alertsSubject: Subject<Object>;

    message(message: string, type: string, callback: any);
}

@Injectable()
export class AlertService implements AlertsInterface {

    alertsSubject = new Subject<Object>();

    alertsObs = this.alertsSubject.asObservable();

    message(message: string, type: string, callback: any) {
        this.alertsSubject.next({message: message, type: type, callback: function () {
            
        }, styles: {}});
    }


}