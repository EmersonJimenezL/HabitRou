import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.scss'],
})
export class ListmenuComponent implements OnInit {

  items: any[] = []

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = this.router.config.filter((route) => route.path != '')
  }

}
