import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class BaseComponent implements OnInit {

  constructor(public router: Router) {}
  ngOnInit (): void {}


  openPage(routeName: string){
    this.router.navigateByUrl(`/${routeName}`);
  }
}
