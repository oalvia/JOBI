import { AllProductsComponent } from './all-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/public/i18n/', '.json');}


@NgModule({
  declarations: [
    AllProductsComponent
  ],

  imports: [
    CommonModule,
    AllProductsRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    TranslateModule
  ],
  exports: [
    AllProductsComponent
  ]
})
export class AllProductsModule { }
