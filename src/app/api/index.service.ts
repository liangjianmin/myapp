import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';


@Injectable()
export class apis {

    static baseUrl: string = 'http://localhost:3000/';

    /**
     *  获取首页新闻
     */
    static getHomeNews = apis.baseUrl + 'news';


    /**
     *  注册
     */
    static register = apis.baseUrl + 'register';


    /**
     *  登录
     */
    static login = apis.baseUrl + 'login';

    /**
     * session
     * */
    static session=apis.baseUrl+'session'
}


@Injectable()
export class Services {

    constructor(public http: Http) {

    }

    getHomeNews(params): Observable<any> {
        return this.http.get(apis.getHomeNews, {params: params}).map(res => res.json());
    }

    register(params): Observable<any> {
        return this.http.post(apis.register, params).map(res => res.json());
    }

    login(params): Observable<any> {
        return this.http.post(apis.login, params).map(res => res.json());
    }

    getSession(params):Observable<any>{
      return this.http.get(apis.session, params).map(res => res.json());
    }

}
