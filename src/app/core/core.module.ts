import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslationComponent } from './components/translation/translation.component';



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
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class CoreModule { }
