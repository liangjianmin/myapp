import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
  }
  addClass(ele, cls) {
  if (!this.hasClass(ele, cls)) ele.className += " " + cls;
  }
  removeClass(ele, cls) {
  if (this.hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
  }
  toggleClass(ele, cls) {
  if(ele.length>1){
    for( var i=0 ;i<ele.length;i++){
      this.hasClass(ele[i],cls)? this.removeClass(ele[i], cls): this.addClass(ele[i], cls)
    }
  }else {
    this.hasClass(ele,cls)? this.removeClass(ele, cls): this.addClass(ele, cls)
  }
}

}
