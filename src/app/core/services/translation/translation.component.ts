import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core'
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit{
  ngOnInit(): void{}
  public activeLang = 'es';
  public currrentLang = '';
  constructor(
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
    this.translate.addLangs(['es','en'])
    
  }

  public switchLang(lang : string){
    this.translate.use(lang);
    console.log(lang)
    let currentLang = lang;
  }

  public currentMessage = new BehaviorSubject<string>(this.currrentLang);
// currentMessage = this.messageSource.asObservable();

}



