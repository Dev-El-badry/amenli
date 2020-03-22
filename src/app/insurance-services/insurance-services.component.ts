import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InsuranceService } from './insurance.service';

@Component({
  selector: 'app-insurance-services',
  templateUrl: './insurance-services.component.html',
  styleUrls: ['./insurance-services.component.css']
})
export class InsuranceServicesComponent implements OnInit, AfterViewChecked {
  page: string;
  result;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private insuranceService: InsuranceService) { }

  ngOnInit() {

    this.activatedRoute.queryParamMap.subscribe(paramMap=> {
      if(!paramMap.has('page')) {
        return this.router.navigateByUrl('/');
      }

      this.page = paramMap.get('page');
    });
    
  }

  ngAfterViewChecked() {
    this.result =  this.insuranceService.getServiceByTag(this.page);
    console.log('result', this.result);
  }

}
