import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
