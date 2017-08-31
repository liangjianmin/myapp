import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    menus: Array<Menu>;

    constructor(public router: Router) {
    }

    ngOnInit() {
        this.menus = [
            new Menu(1, '菜谱大全', '/home'),
            new Menu(2, '精选食材', '/person'),
            new Menu(3, '上传食谱', '/person'),
            new Menu(4, '广场', '/person')
        ];
    }
}


export class Menu {
    constructor(public id: number, public name: string, public link: string) {

    }
}