import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-Conducta',
  templateUrl: './Conducta.component.html',
})
export class AppConductaComponent {
  constructor() {}
}
