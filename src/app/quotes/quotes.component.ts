import { Component, OnInit } from '@angular/core';
import { QuotesService } from './shared/quotes.service';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  brands;
  years;
  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    
  }

}
