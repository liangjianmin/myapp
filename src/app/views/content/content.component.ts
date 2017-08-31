import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {Content, ContentService} from '../../service/content.service'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private content: Observable<Content[]>;

  constructor(public router: Router, private contentService: ContentService) {

  }


  ngOnInit() {
    this.content = this.contentService.getLists();
  }

}


