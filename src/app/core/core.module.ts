import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationComponent } from './services/translation/translation.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/public/i18n/', '.json');}

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    TranslationComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader:{
        provide:TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
        },
    })
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    TranslationComponent
  ]
})
export class CoreModule { }
