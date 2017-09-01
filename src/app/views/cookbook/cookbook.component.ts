import {AfterContentInit, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Content, ContentService} from '../../service/content.service'

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit{

  private content: Observable<Content[]>;
  test:number[];
  test1:any[];
  str:string;

  constructor(private contentService: ContentService) { }
  ngOnInit() {

    this.content = this.contentService.getLists();
    this.test1=[
      './assets/images/foods/1.jpg',
      './assets/images/foods/2.jpg',
      './assets/images/foods/3.jpg',
      './assets/images/foods/4.jpeg',
      './assets/images/foods/5.jpeg',
      './assets/images/foods/6.jpeg',
      './assets/images/foods/7.jpeg',
      './assets/images/foods/8.jpeg',
      './assets/images/foods/9.jpeg',
      './assets/images/foods/10.jpeg',
      './assets/images/foods/11.jpeg',
      './assets/images/foods/12.jpeg',
    ];
    let  obj:any;
    let  objChild:any;
    let  imgArr:any[];
    obj=document.getElementsByClassName('c-ul');
    objChild=document.getElementsByClassName('img-item').length;
    console.log(obj)
    console.log(obj.length)
    console.log(objChild)


  }



}

