import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ContentService {

  constructor(public http: Http) {
  }

  getLists(): Observable<Content[]> {
    return this.http.get('/api/stock').map(res => res.json());
  }

  getList(id: number): Observable<Content> {
    return this.http.get('/api/stock/' + id).map(res => res.json());
  }

}


export class Content {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
