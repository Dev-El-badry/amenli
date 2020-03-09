import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class TranslateConfigService {
  constructor(private translate: TranslateService) {}

  getDefaultLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
    
  }

  setDefault(defLang) {
    this.translate.setDefaultLang(defLang);
  }
}