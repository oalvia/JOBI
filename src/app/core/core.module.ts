import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/public/i18n/', '.json');}

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    ScrollToTopComponent
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
    ScrollToTopComponent,

  ]
})
export class CoreModule { }
