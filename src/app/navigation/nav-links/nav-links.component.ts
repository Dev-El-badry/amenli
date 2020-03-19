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

  changeLang(lang) {
    this.translate.setLanguage(lang);
    if(lang == 'ar')
      this.translate.setDir('rtl');
    else
      this.translate.setDir('ltr');
  }

}
