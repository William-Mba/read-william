import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export abstract class BaseComponent {
  private router = inject(Router);

  navigateTo(routeName: string){
    this.router.navigateByUrl(`/${routeName}`);
  }
}
