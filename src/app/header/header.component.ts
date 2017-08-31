import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    menus: Array<Menu>;

    currentMenuId: number;

    constructor(public router: Router) {
    }

    ngOnInit() {
        this.menus = [
            new Menu(1, '首页', '/home'),
            new Menu(2, '登录', '/person')
        ];
    }
}


export class Menu {
    constructor(public id: number, public name: string, public link: string) {

    }
}