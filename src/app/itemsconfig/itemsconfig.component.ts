import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

@Component({
  selector: 'app-itemsconfig',
  templateUrl: './itemsconfig.component.html',
  styleUrls: ['./itemsconfig.component.scss'],
})
export class ItemsconfigComponent {

  constructor() {

    addIcons({ airplane, bluetooth, call, wifi });
  }

}
