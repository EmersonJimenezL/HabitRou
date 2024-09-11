import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuburgerComponent } from "./menuburger/menuburger.component";
import { ListmenuComponent } from "./listmenu/listmenu.component";
import { FooterComponent } from "./footer/footer.component"

@NgModule({
  declarations: [AppComponent, MenuburgerComponent, ListmenuComponent, FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
