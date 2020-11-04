import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {SummonerComponent} from './components/summoner/summoner.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'summoner/:summonerName',
    component: SummonerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
