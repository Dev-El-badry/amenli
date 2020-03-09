import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckoutService } from '../shared/checkout.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  form;
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.form = this.checkoutService.form;
  }

  onClicked(val) {
    console.log(val.target.value);
  }

  onClick() {
    console.log(this.form.value);
  }

}
