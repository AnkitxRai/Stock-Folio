import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './components/watchlist/watchlist.component';



@NgModule({
  declarations: [
    WatchlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WatchlistComponent
  ]
})
export class WatchlistModule { }
