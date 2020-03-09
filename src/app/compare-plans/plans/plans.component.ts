import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompareModelService } from '../shared/compare-model.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit, OnDestroy {
  options: object[];
  jsonData: object;
  companyName: string;
  planSelected: string;
  brandId: string;
  price: string;
  typeShow: string;
  change = false;
  loadPlansSub: Subscription;
  plans;
  constructor(private router: Router, private params: ActivatedRoute, private compareModelService: CompareModelService) { }

  ngOnInit() {

    this.options = [
      {name:'Monthly', value:'monthly'},
      {name:'Yearly', value:'yearly'},
    ];

    this.params.paramMap.subscribe(paramMap => {
      this.planSelected = paramMap.get('plan_selected');
      this.companyName = paramMap.get('company_name');
      this.brandId = paramMap.get('brandId');
      this.price = paramMap.get('price');

      this.loadPlansSub = this.compareModelService.loadPlans.subscribe(res => {
        console.log('plans',Object.values(res)[0]["price"]);
        this.plans = res;
      });

      console.log('Here',this.plans);
      this.compareModelService.getPlans(this.companyName, this.brandId, this.price);
    });
  }



  getPriceFromObject(type: any, numTarget) {
    console.log(type, numTarget);
    let typeStr = '';
    if(type === 'monthly') {
      typeStr = Object.values(this.plans.plan[numTarget])[0]["month_price"]; 
    } else if(type === 'yearly'){
      typeStr =Object.values(this.plans.plan[numTarget])[0]["price"]; 
    }
    console.log(typeStr);
    

    return typeStr;
  }

  getChangeValue(val, target) {
    let ele = document.querySelector(".ele-"+target+"");
    let ele2 = document.querySelector(".type-"+target+"");
    let text_val = this.getType(val);
    let text = this.getPriceFromObject(val, target);
    

    ele.textContent = this.formatNumber(parseInt(text));
    ele2.textContent = text_val;
  } 

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  getType(type) {
    let type_val = '';
    if(type === 'monthly') {
      type_val = 'month';
    } else if(type === 'yearly') {
      type_val = 'year'
    }

    return type_val;
  }

  convertObjectToKeys(obj: object) {
    if(obj)
      return Object.keys(obj);
  }
  convertObjectToValues(obj: object) {
    if(obj)
      return Object.values(obj);
  }

  onClick(company_name, plan_selected, brandId, price) {
    this.router.navigate(['/','checkout', 'payment', company_name,plan_selected,brandId,price]);
  }


  chk_val_is_ture_or_yes(val: string | boolean) {
    if((val === true) || (val === 'Yes')) {
      return true;
    }
  }

  chk_val_is_false_or_no(val: string | boolean) {
    if((val === false) || (val === 'No')) {
      return true;
    }
  }

  chk_if_not_true_and_false(val: string | boolean) {
    if((val != true) && (val != 'No') && (val != 'Yes') && (val != false)) {
      return true;
    }
  }

  convertArray(num) {
    return new Array(num);
  }

  ngOnDestroy() {
    if(this.loadPlansSub) this.loadPlansSub.unsubscribe();
  }

}
