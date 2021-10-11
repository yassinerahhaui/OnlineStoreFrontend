import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/sidenavigation/navigation/navigation.component';
import { MaterialModule } from './module/material/material.module';
import { ToolbarComponent } from './components/sidenavigation/toolbar/toolbar.component';
import { NavlistComponent } from './components/sidenavigation/navlist/navlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToolbarComponent,
    NavlistComponent,
    ProfileComponent,
    ShoppingCartComponent,
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
