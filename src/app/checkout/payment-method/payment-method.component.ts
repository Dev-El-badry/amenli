import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../shared/checkout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  form;
  constructor(private checkoutService: CheckoutService, private translate: TranslateService) { }

  ngOnInit() {
    this.form = this.checkoutService.form;

    this.translate.get('checkout.card_number').subscribe(text => {

      (<HTMLInputElement>document.getElementById('card_number')).placeholder = text;
    });
    this.translate.get('checkout.name_card').subscribe(text => {

      (<HTMLInputElement>document.getElementById('name_card')).placeholder = text;
    });
    this.translate.get('checkout.email').subscribe(text => {

      (<HTMLInputElement>document.getElementById('email')).placeholder = text;
    });
    this.translate.get('checkout.number').subscribe(text => {

      (<HTMLInputElement>document.getElementById('number')).placeholder = text;
    });
    this.translate.get('checkout.exp').subscribe(text => {

      (<HTMLInputElement>document.getElementById('exp')).placeholder = text;
    });
    this.translate.get('checkout.security_code').subscribe(text => {

      (<HTMLInputElement>document.getElementById('security_code')).placeholder = text;
    });
  
  }

  onClicked(val) {
    console.log(val.target.value);
  }

  onClick() {
    console.log(this.form.value);
  }

}
