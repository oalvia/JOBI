import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VideogameListRoutingModule } from './videogame-list-routing.module';
import { VideogameListComponent } from './videogame-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    VideogameListComponent
  ],
  imports: [
    CommonModule,
    VideogameListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class VideogameListModule { }
