import { Component } from '@angular/core';
import { ProdService } from 'src/app/services/prod.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  myCounter: number = 0;
  constructor(private myServ: ProdService) {
    this.myCounter = myServ.counter;
  }
  addOne() {
    console.log(this.myServ.counter);
    this.myServ.counter++;
    this.myCounter = this.myServ.counter;
  }
}
