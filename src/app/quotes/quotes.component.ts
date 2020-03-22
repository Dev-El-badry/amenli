import { Router } from '@angular/router';
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
  constructor(private quotesService: QuotesService, private router: Router) { }

  ngOnInit() {
  }
  handleChange(e) {
    const index = e.index;
    if (index === 1) {
      localStorage.setItem('medical', 'medical');
    } else {
      localStorage.removeItem('medical');
    }
}

}
