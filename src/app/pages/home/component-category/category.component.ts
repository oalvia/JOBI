import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language/language.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  public mycurrentLang: string = '';
  public activeLang = 'es';

  constructor(
    public translate: TranslateService,
    private languageService: LanguageService
  ){
    this.translate.setDefaultLang(this.activeLang);
    this.translate.addLangs(['es','en'])}; 
 
    public switchLang(lang: string) {
      this.mycurrentLang = this.languageService.getCurrentLang();
      this.translate.use(lang);
      let currentLang = lang;
      this.languageService.setCurrentLang(currentLang);
  }
}