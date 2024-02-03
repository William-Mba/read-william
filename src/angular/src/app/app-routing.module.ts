import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const routes: Routes = [
  { path: '', component: PageOneComponent },
  { path: 'pageone', component: PageOneComponent },
  { path: 'pagetwo', component: PageTwoComponent },
  { path: 'pagethree', component: PageThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
