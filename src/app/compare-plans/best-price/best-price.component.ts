import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { QuotesService } from 'src/app/quotes/shared/quotes.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-best-price',
  templateUrl: './best-price.component.html',
  styleUrls: ['./best-price.component.css']
})
export class BestPriceComponent implements OnInit, OnDestroy {
  display = false;
  length: number = 0;
  price: number = 0;
  loadPriceSub: Subscription;
  plan_selected;
  loadNumCompaniesSub: Subscription;
  company_name: string;
  company_selected: string;
  @ViewChild('f', {static: true}) form:NgForm;
  constructor(private quoteService: QuotesService, private router: Router, private shared:SharedService) { }

  ngOnInit() {
   
    this.loadPriceSub = this.quoteService.loadLowestPrice.subscribe(res => {
     
      this.price = res.price;
      this.company_name = res.name;
      this.plan_selected = res.type;
      this.length = res.num_company;
      this.company_selected = JSON.stringify(res[1]);

      console.log('json string', this.company_selected);
    });

    this.quoteService.fetchLowestPrice();
  
  }

  showDialog() {
    this.display=true;
  }


  onSubmit(form:NgForm) {
    if(!form.valid) {
      console.log('form invalid');
      return;
    }
    console.log(form.value.price);
    console.log('Successs');
    console.log(this.plan_selected);
  
    localStorage.setItem('brandId', this.quoteService._dataList.id);
    localStorage.setItem('price', this.quoteService._dataList.price);

    this.router.navigate(['/','plan', 'choose', 
    this.company_name, this.plan_selected , 
    this.quoteService._dataList.id,
     this.quoteService._dataList.price.toString()]);
  }

  validPrice() {
    return this.form.value.price > 0;
  }

  onClick() {
    const dataList = this.quoteService._dataList;
    localStorage.setItem('brandId', dataList.id);
    localStorage.setItem('price', dataList.price);
    this.router.navigate(["/", 'companies', 'choose', dataList.id, dataList.price]);
    // let data = { plans_selected: this.company_selected };
    // this.shared.saveInLocalStorage(data);
    // this.router.navigate(['/','plan', 'choose', this.company_name, 'gold']);
  }

  ngOnDestroy() {
    if(this.loadPriceSub) this.loadPriceSub.unsubscribe();
  }

}
