import {AfterContentInit, Component , OnChanges, OnInit,DoCheck,AfterViewInit,Directive,ElementRef} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
//import {Content, ContentService} from '../../service/content.service'
/*import {Public} from '../common/public/public.component'*/

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})

@Directive({ selector: '[mywidth]' })


export class CookbookComponent implements OnInit,OnChanges,DoCheck,AfterViewInit{

  //private content: Observable<Content[]>;
  imgInfo:any[];
  imgInfoUse:any[];


  constructor(el: ElementRef) {
    el.nativeElement.style.width = '300px';

  }

  ngOnInit() {
   // this.content = this.contentService.getLists();
    this.imgInfo=[
      {
        w:525,
        h:350,
        url:'./assets/images/foods/1.jpg'
      },
      {
        w:467,
        h:350,
        url:'./assets/images/foods/2.jpg'
      },
      {
        w:467,
        h:350,
        url:'./assets/images/foods/3.jpg'
      },
      {
        w:621,
        h:350,
        url: './assets/images/foods/4.jpeg'
      },
      {
        w:525,
        h:350,
        url: './assets/images/foods/5.jpeg'
      },
      {
        w:528,
        h:350,
        url: './assets/images/foods/6.jpeg'
      },
      {
        w:524,
        h:350,
        url: './assets/images/foods/7.jpeg'
      },
      {
        w:528,
        h:350,
        url: './assets/images/foods/8.jpeg'
      },
      {
        w:467,
        url: './assets/images/foods/9.jpeg',
        h:350,
      },
      {
        w:525,
        h:350,
        url: './assets/images/foods/10.jpeg'
      },
      {
        w:467,
        url: './assets/images/foods/11.jpeg',
        h:350
      },
      {
        w:432,
        h:350,
        url: './assets/images/foods/12.jpeg'
      }
    ];
    var arrt=[];
    var wid=0;
    var imgInfoT=[];
    var arrAll= this.imgInfo;

  /*  this.imgInfo.forEach(function (a, b) {
      wid+=a.w;
      arrt.push(a.w);
      if(wid>=1060){
        var ora=350/350;
        console.log(ora)
        arrt.forEach(function (value,index) {
          arrAll[index].w=arrt[index]*ora;
          // this.imgInfo.push(ora*value);
        });
        console.log(arrt)
        arrt=[];
        wid=0;
      }
    });
*/
   /* setTimeout(function () {
      let  obj:any;
      let  objChild:any;
      let  imgArr:number[]=new Array();
      obj=document.getElementsByClassName('c-ul');
      objChild=obj[0].getElementsByClassName('img-item');
      for(var i=0;i<objChild.length;i++){
        imgArr.push(objChild[i].style);
      }
    },500)*/


}
  ngDoCheck():void{
    var ttt=new flexImg();
    ttt.init();
  }

  ngAfterViewInit(){
   setTimeout(function () {

   },500)
  }

  ngOnChanges(){

  }

}
class flexImg{
  constructor(){}
  init(){
    this.addNewWid({heirao:500,lass:'.img-item'})
  }
  addNewWid(a){
    //设定新宽
    var widArr=[];
    var widAll=0;//现在宽
    var newArr=[];//单组
    var newWid=[];//最后宽
    var s=document.getElementsByClassName('img-item');
    /*for(var i in s){
      console.log(s[i].width)
    }*/
    console.log(s)
    console.log(s[0])
   // console.log(s[0].getAttribute('width'))
    // console.log(s[0].getAttribute('width'))
    for(var i=0;i<s.length;i++){
    //  console.log(parseInt(s[0].getAttribute('width')))
     // console.log('宽'+parseInt(s[i].getAttribute('width'))
      var newW=parseInt(s[i].getAttribute('width'))*(500/parseInt(s[i].getAttribute('height')))
    //  var newW=s[i].getAttribute('width')*(a.heirao/s[i].getAttribute('height'));
     widArr.push({w:newW,old_w:parseInt(s[i].getAttribute('width'))})
     // console.log(widArr)
    }
    widArr.forEach(function (value,ind) {
      widAll+=value.w;
      newArr.push(value.w);
      if(widAll>=1060){
        var or=widAll/1060 ;//比例
        newArr.forEach(function (value,i) {
          newWid.push(Math.floor(value/or));
        });
        widAll=0;
        newArr=[];
      }
   //   console.log(newWid)
    })
  }
  getFwid(){

  }
}

