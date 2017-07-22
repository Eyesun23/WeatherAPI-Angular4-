import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SJComponent } from './sj/sj.component';
import { SeattleComponent } from './seattle/seattle.component';

const APP_ROUTES: Routes = [
    { path: 'seattle', component: SeattleComponent },
    { path: 'sj', component: SJComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'washington', component: WashingtonComponent },
    { path: 'chicago', component: ChicagoComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
