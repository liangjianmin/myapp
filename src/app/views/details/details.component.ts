import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private detailsId: number;

  constructor(private  routerInfo: ActivatedRoute) {
    this.routerInfo.params.subscribe((params: Params) => this.detailsId = params["id"]);
  }

  ngOnInit() {

    //this.detailsId = this.routerInfo.snapshot.queryParams['id'];  在查询参数中传递数据
    //this.detailsId = this.routerInfo.snapshot.params['id'];  在路由路径中传递参数

  }

}
