import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  template: `
    <button type="button" (click)="openPage('pagetwo')">
      Page Two
    </button>

    <button type="button" (click)="openPage('pagethree')">
      Page Three
    </button>
  `,
  styles: [
  ]
})

export class PageOneComponent extends BaseComponent {
  constructor(router: Router){
    super(router);
  }
}
