import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './module/material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavlistComponent } from './components/navlist/navlist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToolbarComponent,
    NavlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
