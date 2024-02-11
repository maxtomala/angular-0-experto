import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    CounterModule,
    HeroesModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
