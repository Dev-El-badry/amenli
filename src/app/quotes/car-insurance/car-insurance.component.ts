import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuotesService } from '../shared/quotes.service';
import { Subscription } from 'rxjs';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.css']
})
export class CarInsuranceComponent implements OnInit, OnDestroy {
  brands;
  years;
  loadBrandsSub: Subscription;

  form: FormGroup;
  data = {
    brand: 0,
    price: 0,
    year: 0
  };
  constructor(private quotesService: QuotesService, private translate: TranslateService) { }

  ngOnInit() {

    // create form
    this.createCarForm();

    // this.brands = this.quotesService.getBrands();
    this.years = this.quotesService.getYears();

    this.loadBrandsSub = this.quotesService.loadBrands.subscribe(brands => {
      this.brands = brands;
      console.log('brands', this.brands);
    });

    this.quotesService.fetchBrandsFromService();

    this.translate.get('quotes.car_placeholder').subscribe((text: string) => {
      (document.getElementById('price') as HTMLInputElement).placeholder = text;
    });
  }

  createCarForm() {
    this.form =  new FormGroup({
      brand: new FormControl(0, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      year: new FormControl(0, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  // Form
  selectBrand(event) {
    console.log(event.value);
   // this.afterCheckForm();
  }

  // submit form auto
  submitFormAuto(value: any, type: 'brand' | 'price' | 'year') {

    if (type === 'brand') {
      this.data.brand = value;
    }

    if (type === 'price') {
      this.data.price = parseInt(value);
    }

    if (type === 'year') {
      this.data.year = value;
    }

    if ((this.data.price != null) && (this.data.price) !== 0 && (this.data.brand != null) && (this.data.brand !== 0 ) && (this.data.year != null) && (this.data.year !== 0 ) ) {
      console.log(this.data);
      this.quotesService.getDataList({id: this.data.brand, price: this.data.price});
    }

  }

  selectYear(event) {
    console.log(event.value);

  }

  getPrice(val) {

    const result = val;
    console.log('price', result);
    // this.afterCheckForm();
  }

  afterCheckForm(data) {
    if (!this.form.valid) {
      console.log('FORM FALSE');
      return;
    }

    // console.log(this.data);
  }

  // End Form

  onSubmit() {
    console.log(this.form);
    if (!this.form.valid) {
      console.log('FALSE');
    }

    console.log(this.form.value);
  }

  ngOnDestroy() {
    if (this.loadBrandsSub) { this.loadBrandsSub.unsubscribe(); }
  }
}
