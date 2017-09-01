import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private menus: Array<Menu>;

    private fixflag: boolean = false;

    @Input()
    private fix: boolean = false;

    constructor(public router: Router) {

    }

    ngOnInit() {
        this.menus = [
            new Menu(1, '菜谱大全', '/home'),
            new Menu(2, '精选食材', '/selfoot'),
            new Menu(3, '上传食谱', '/uploadfoot'),
            new Menu(4, '广场', '/square')
        ];
        if (this.fix) {
            this.fixflag = true;
        } else {
            this.fixflag = false;
        }
    }
}


export class Menu {
    constructor(public id: number, public name: string, public link: string) {

    }
}