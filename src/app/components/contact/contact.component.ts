import { Component } from '@angular/core';
import { ProdService } from 'src/app/services/prod.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  myCounter: number = 0;
  constructor(private myServ: ProdService) {
    this.myCounter = myServ.counter;
  }
}
