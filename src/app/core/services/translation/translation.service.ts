import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService implements OnInit{

public activeLang = 'es';
public currentLang = '';
public languages = ['es', 'en'];
public langs: string[] = [];

  constructor(private translate: TranslateService)
  {
    translate.addLangs(['es','en']);
    translate.setDefaultLang('es');
    this.langs = translate.getLangs();
   }

ngOnInit() : void {
  this.translate.use('es')
}
 public switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  public trans(key: string) {
    this.translate.get(key).subscribe((res)=>{
console.log(res);
    })
  }
}
