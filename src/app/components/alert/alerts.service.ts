import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export interface AlertInterface {
    alertSubject: Subject<Object>;

    message(message: string, type: string, timeout: number, callback: any);
}

@Injectable()
export class AlertService implements AlertInterface {

    alertSubject = new Subject<Object>();

    alertsObs = this.alertSubject.asObservable();

    message(message: string, type: string, timeout: number, callback: any) {
        this.alertSubject.next({message: message, type: type, timeout: timeout, callback: callback, styles: {}});
    }

}