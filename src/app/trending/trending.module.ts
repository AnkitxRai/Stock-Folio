import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './components/trending/trending.component';



@NgModule({
  declarations: [
    TrendingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrendingComponent
  ]
})
export class TrendingModule { }
