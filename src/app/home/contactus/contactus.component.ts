import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('contactus').subscribe(val => {
      (<HTMLInputElement>document.getElementById('name')).placeholder = val.name;
      (<HTMLInputElement>document.getElementById('email')).placeholder = val.email;
      (<HTMLInputElement>document.getElementById('address')).placeholder = val.address;
      (<HTMLInputElement>document.getElementById('message')).placeholder = val.message;
    })
  }

}
