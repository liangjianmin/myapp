import {Component, OnInit, OnChanges, AfterViewInit, ElementRef, ViewChild, DoCheck, AfterViewChecked} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AppService} from '../../app.service';
import {Services} from '../../api/index.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, DoCheck, AfterViewChecked {

    public title: string = '首页';

    // 首页新闻
    private contentNews: Observable<any>;


    constructor(public router: Router, private appService: AppService, private services: Services, private elementRef: ElementRef) {

        this.appService.titleEventEmitter.emit('首页');
        this.contentNews = this.services.getHomeNews();

    }


    ngOnInit() {

    }

    ngAfterViewInit() {

        setTimeout(() => {
            var dom = this.elementRef.nativeElement.querySelectorAll('.newslist li img');
            //var width=dom[0].style.width='400px'
            console.log(dom[0].offsetWidth);
        }, 0);

    }


    ngDoCheck(): void {

    }

    ngAfterViewChecked(): void {

    }

}
