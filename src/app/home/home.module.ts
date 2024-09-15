import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { BotoniniciarComponent } from '../botoniniciar/botoniniciar.component'
import { TimerComponent } from '../timer/timer.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, BotoniniciarComponent, TimerComponent],
})
export class HomePageModule { }
