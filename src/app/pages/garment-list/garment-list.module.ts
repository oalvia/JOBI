import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './../../shared/shared.module';
import { RouterLink, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarmentListRoutingModule } from './garment-list-routing.module';
import { GarmentListComponent } from './garment-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GarmentListComponent,
    
  ],
  imports: [
    CommonModule,
    GarmentListRoutingModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [
    GarmentListComponent
  ]
})
export class GarmentListModule { }
