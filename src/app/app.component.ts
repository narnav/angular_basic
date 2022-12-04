import { Component } from '@angular/core';
import { User_model } from './model/User';
import { ProdService } from './services/prod.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arProducts: User_model[] = [];
  constructor(private myServ: ProdService) {
    myServ.getdata().subscribe((res) => (this.arProducts = res));
    myServ.getdata().subscribe((res) => console.log(res));
  }
  // load data when component load
  loadData() {
    this.myServ.getdata().subscribe((res) => (this.arProducts = res));
  }

  // create/ add new data
  addData(desc: any, price: any) {
    this.myServ.createData({ desc, price }).subscribe((res) => {
      console.log(res), this.loadData();
    });
  }
  // delete
  delData(id: any) {
    this.myServ.delData(id).subscribe((res) => {
      console.log(res), this.loadData();
    });
    console.log(id);
  }
  // update
  updData(id: any, desc: any, price: any) {
    this.myServ.updData(id, { desc, price }).subscribe((res) => {
      console.log(res), this.loadData();
    });
  }
}
