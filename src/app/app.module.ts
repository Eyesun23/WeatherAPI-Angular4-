import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { SJComponent } from './sj/sj.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    SJComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    SeattleComponent,
    WashingtonComponent
  ],
  imports: [
    BrowserModule,
    routing,
		FormsModule,
		HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
