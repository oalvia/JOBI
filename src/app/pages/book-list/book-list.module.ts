import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    BookListComponent,
  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  exports: [BookListComponent],
})
export class BookListModule {}
