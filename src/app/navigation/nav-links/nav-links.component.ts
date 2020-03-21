import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/shared/translate-config.service';


@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  direction: 'ltr' | 'rtl';
  constructor(private translate: TranslateConfigService) { }

  ngOnInit() {
    this.direction = this.translate.getDir();
  }

  get lang() { return localStorage.getItem('lang') }

  changeLang(lang) {
    this.translate.setLanguage(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
    if(lang == 'ar'){
     
      this.translate.setDir('rtl');
    }
    else {
      this.translate.setDir('ltr');
    }

   
  }

}
