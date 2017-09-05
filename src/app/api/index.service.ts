import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';


@Injectable()
export class apis {

    static baseUrl: string = 'http://127.0.0.1:3000/';

    /**
     *  获取首页新闻
     * @returns {string}
     */
    static getHomeNews() {
        return apis.baseUrl + 'news';
    }


}


@Injectable()
export class Services {

    constructor(public http: Http) {

    }


    getHomeNews(): Observable<any> {
        return this.http.get(apis.getHomeNews()).map(res => res.json());
    }


}
