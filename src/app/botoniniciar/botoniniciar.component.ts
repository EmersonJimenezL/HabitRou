import { Component } from '@angular/core';

@Component({
  selector: 'app-botoniniciar',
  templateUrl: './botoniniciar.component.html',
  styleUrls: ['./botoniniciar.component.scss'],
})
export class BotoniniciarComponent {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
