import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { CheckoutService } from '../shared/checkout.service';
import { UIService } from 'src/app/shared/ui.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  @Input('plan') plan : string;
  form;
  summary: any;
  planSelected: string;
  companyName: string;
  brandId: string;
  price: string;
  planData: Subscription;
  chk_val: boolean;
  constructor(private checkoutService: CheckoutService, private uiService: UIService, private params: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.params.paramMap.subscribe(paramMap => {
      if((!paramMap.has('plan_selected')) 
      && (!paramMap.has('company_name')) 
      && (!paramMap.has('brandId')) 
      && (!paramMap.has('price'))) {
        this.router.navigateByUrl("");
      }

      this.planSelected = paramMap.get('plan_selected');
      this.companyName = paramMap.get('company_name');
      this.brandId = paramMap.get('brandId');
      this.price = paramMap.get('price');

      this.planData = this.checkoutService.loadPlan.subscribe(res => {
        console.log('plans',Object.values(res)[0]["benefit"]);
        this.planData = res;
      });

      console.log('Here =>',this.planData);
      this.checkoutService.getPlanCompany( this.brandId, this.price, this.companyName,this.planSelected);
    });


    this.form = this.checkoutService.form;
     
  }

  getCheck(event) {
    this.chk_val = event;
  }

  onClick() {
    console.log(this.checkoutService.form.value);

    if(!this.form.valid) {
        return;
    }
   
    this.checkoutService.submitTicket({
      phone: this.form.value.number.toString(),
      mail: this.form.value.email,
      name: this.form.value.name,
      car: parseInt(localStorage.getItem('brandId')),
      sum_insured: parseInt(localStorage.getItem('price'))
      }).subscribe(res => {
        if(res) {
        
            console.log('get ticket', res);
           this.uiService.addSingle('success', 'Done', 'Thank You For Asking Amenli It Means A lot To US, We Will Come back Shortly');
      
        }
      }, error => console.log(error));
    
  }

  convertObjectToKeys(obj: object) {
    if(obj)
      return Object.keys(obj);
  }
  convertObjectToValues(obj: object) {
    if(obj)
      return Object.values(obj);
  }

  ngOnDestroy() {
    if(this.planData) this.planData.unsubscribe();
  }
}
