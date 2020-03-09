import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../shared/quotes.service';

@Component({
  selector: 'app-medical-insurance',
  templateUrl: './medical-insurance.component.html',
  styleUrls: ['./medical-insurance.component.css']
})
export class MedicalInsuranceComponent implements OnInit {
  ages;
  constructor(private quoteService: QuotesService) { }

  ngOnInit() {
    this.ages = this.quoteService.getAges();
  }

}
