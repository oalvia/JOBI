import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToysListRoutingModule } from './toys-list-routing.module';
import { ToysListComponent } from './toys-list.component';
//import { ToyComponent } from './components/toy/toy.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslationComponent } from 'src/app/core/services/translation/translation.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ToysListComponent,
    //ToyComponent
  ],
  imports: [
    CommonModule,
    ToysListRoutingModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
   CoreModule
    

  ],
  exports: [
    ToysListComponent
  ]
})
export class ToysListModule { }
