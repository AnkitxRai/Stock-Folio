import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HeaderModule } from '../header/header.module';
import { NewsModule } from '../news/news.module';
import { TrendingModule } from '../trending/trending.module';
import { WatchlistModule } from '../watchlist/watchlist.module';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    NewsModule,
    SidebarModule,
    TrendingModule,
    WatchlistModule

  ],
})
export class DashboardModule { }
