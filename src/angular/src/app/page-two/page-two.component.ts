import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  template: `
  <button type="button" (click)="openPage('pageone')">
    Page One
  </button>

  <button type="button" (click)="openPage('pagethree')">
    Page Three
  </button>
  `,
  styles: [
  ]
})
export class PageTwoComponent extends BaseComponent{
  constructor(router: Router){
    super(router);
  }
}
