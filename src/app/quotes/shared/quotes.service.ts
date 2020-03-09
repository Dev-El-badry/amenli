import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OdooService } from 'src/app/shared/odoo.service';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';
@Injectable()
export class QuotesService {
  private jsonURL = 'assets/jsonFiles/Sheet1.json';
  private brands: any[] = [
    {
      label: "Choose Vehicle Type",
      value: 0
    }
  ];
  _dataList;
  carForm: FormGroup;
  loadBrands = new Subject<any[]>();
  loadLowestPrice = new Subject<any>();
  loadNumCompanies = new Subject<number>();
  loadNumCompaniesByPrice = new Subject<number>();
  loadAllCompanies = new Subject<any>();
  loadAllCompaniesByFilter = new Subject<any>();
  loadAllCompaniesByPrice = new Subject<any>();
  private years = [
    
    { label: "Choose Year", value: "0" },
    { label: "2020", value: 2020 },
    { label: "2019", value: 2019 },
    { label: "2018", value: 2018 },
    { label: "2017", value: 2017 },
  ];

  private ages = [
      
    { label: "20", value: "20" },
    { label: "25", value: "25" },
    { label: "30", value: "30" },
    { label: "35", value: "35" },
  ];


  constructor(private http: HttpClient, private odooService: OdooService, private shared: SharedService) {
    console.log('quotes service');
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    //  });
    
  }

  fetchBrandsFromService() {
    const data = {paramlist: {filter:[],need:[]}};
    this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'car.brands',
    'search_read', data).subscribe(res => {
        res.forEach(record => {
          let obj = {};
          obj["value"] = record.id;
          obj["label"] = record.brand;
          this.brands.push(obj);
        
        });
        this.loadBrands.next([...this.brands]);
        //  return [...this.brands];
    }, error => console.log(error));
    // return [...this.brands];
  }

  get DataList() {
    return this._dataList;
  }

  getAllCompaniesData(dataList) {
    this._dataList = dataList;

    this.getAllCompanies();
  }

  getDataList(dataList) {
    console.log("data list", dataList);
    this._dataList = dataList;
    
    this.fetchLowestPrice();
    this.getAllCompanies();
  }

  getAllCompanies() {
   
    const data ={paramlist: {data: this._dataList}};
    this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
    'get_price', data).subscribe(res => {
      // console.log('res all', res);
      // console.log ('result  image 2 => ', Object.values(Object.values(Object.values(res)[0]))[0]);

      // for(let i in res) {
      //   console.log ('result => ', Object.values(res)[i].plan);
      //   for(let j in Object.values(res)[i].plan) {
      //     console.log ('result  name 2 => ', Object.keys(Object.values(Object.values(res)[i].plan)[j])[0]);
      //     console.log ('result  month_price 2 => ', Object.values(Object.values(Object.values(res)[i].plan)[j])[0]["month_price"]);
      //     console.log ('result  icons 2 => ', Object.values(Object.values(Object.values(res)[i].plan)[j])[0]["icon"]);
      //   }
      // }
      if(this._dataList) {
        //console.log('data compare company', JSON.stringify(res));
      // console.log('data json', res);
      //   console.log('length', Object.values(Object.values(res)[1])[1]);
      this.loadAllCompanies.next(res);
      this.loadNumCompanies.next(Object.keys(res).length);
      }
    }, error => console.log(error));
  }

  fetchLowestPrice() {
    const data ={paramlist: {data: this._dataList}};
    console.log('data list', this._dataList);
    this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
    'get_lowest_price', data).subscribe(res => {
      if(this._dataList) {
       console.log('lowest price',res);
       console.log(this._dataList);
        this.loadLowestPrice.next(res);
      
      }
    }, error => console.log(error));
  }

  sortCompaniesByPrice(brandId: number, price: number, sort: string) {
    const dataList = {id: brandId, price: price, sort: sort};
    console.log('data list',dataList);
    const data ={paramlist: {data: dataList}};
    this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
    'sort', data).subscribe(res => {
      if(res) {
        console.log(res);
        this.loadAllCompaniesByPrice.next(res);
        this.loadNumCompaniesByPrice.next(Object.keys(res).length);
       
      }
    }, error => console.log(error));
  }
  getByPlan(brandId: number, price: number, value_filter: string) {
    const dataList = { id: brandId, price: price, filter: value_filter };
   
    const data ={paramlist: {data: dataList}};
    this.odooService.call_odoo_function('amenli_db', 'demo', 'demo', 'amenli.api',
    'filter', data).subscribe(res => {
      if(res) {
       
         this.loadAllCompaniesByFilter.next(res);
      }
    }, error => console.log(error));
  }



  


  getBrands() {
    return [...this.brands];
  }

  getYears() {
    return [...this.years];
  }

  getAges() {
    return [...this.ages];
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}