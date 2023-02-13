import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Child1Component } from './child1/child1.component';
import { RoofComponent } from './roof/roof.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Child1Component, RoofComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
