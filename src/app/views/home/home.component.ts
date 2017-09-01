import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Content, ContentService} from '../../service/content.service';
import {AppService} from '../../app.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public title: string = '首页';

    private content: Observable<Content[]>;

    constructor(public router: Router, private appService: AppService, private contentService: ContentService) {

        this.appService.titleEventEmitter.emit('首页');

    }


    ngOnInit() {
        this.content = this.contentService.getLists();
    }

}
