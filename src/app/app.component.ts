import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from './shared/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'amenli';
  constructor(private trnaslateService: TranslateConfigService) {}

  ngOnInit(){
    this.trnaslateService.setLanguage('en');
    this.trnaslateService.setDefault('en');

    this.trnaslateService.setDir('ltr');
    
  }
}
