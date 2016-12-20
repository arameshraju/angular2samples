import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
import { raceComponent } from './race.component';
import { lapComponent } from './lap.component';

@NgModule({
imports : [BrowserModule],
declarations : [ appComponent,raceComponent,lapComponent ],
bootstrap : [appComponent,raceComponent,lapComponent]
})
export class AppModule{}
