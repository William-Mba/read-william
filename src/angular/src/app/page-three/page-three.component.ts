import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-page-three',
  template: `
  <button type="button" (click)="openPage('pagetwo')">
    Page Two
  </button>

  <button type="button" (click)="_openPage('pageone')">
    Page One
  </button>
  `,
  styles: [
  ]
})
export class PageThreeComponent extends BaseComponent{
  constructor(router: Router){
    super(router);
  }  
  
  _openPage(routeName: string){
    this.router.navigateByUrl(`/${routeName}`);
  }


}
