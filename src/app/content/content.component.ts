import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    listdata: Array<List>;

    constructor() {
        this.listdata = [
            new List(1, '小小', 'assets/images/1.jpg', 1.1),
            new List(2, '小葵', 'assets/images/2.jpg', 2),
            new List(3, '小离', 'assets/images/3.jpg', 3),
            new List(4, '小石', 'assets/images/4.jpg', 4.2),
            new List(5, '小鸡', 'assets/images/1.jpg', 5),
            new List(6, '小雅', 'assets/images/2.jpg', 1),
        ]
    }

    ngOnInit() {
    }

}


export class List {
    constructor(public id: number, public name: String, public imgUrl: String, public rating: number) {

    }
}
