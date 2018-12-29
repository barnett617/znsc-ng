import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-goods-manage',
  templateUrl: './admin-goods-manage.component.html',
  styleUrls: ['./admin-goods-manage.component.scss']
})
export class AdminGoodsManageComponent implements OnInit {

  dataSet = [];

  constructor(
    private message: NzMessageService,
    private http:HttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const params = {

    }
    this.http.post('goods', params)
      .subscribe(
      (res) => {
        if (+res.code === 200) {
          this.dataSet = res.data;
        } else {
          console.log(res.msg);
        }
      },
      (error) => {
        this.message.error(error);
        console.log(error);
      }
    )
  }

  edit(id) {
    this.router.navigate(['admin-home/goods-edit'], {
      queryParams: {
        id: id,
      }
    });
  }
}
