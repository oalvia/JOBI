import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameDiscountedDetailRoutingModule } from './videogame-discounted-detail-routing.module';
import { VideogameDiscountedDetailComponent } from './videogame-discounted-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VideogameDiscountedDetailComponent
  ],
  imports: [
    CommonModule,
    VideogameDiscountedDetailRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class VideogameDiscountedDetailModule { }
