import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';
import { CardsListComponent } from './cards-list.component';



@NgModule({
  declarations: [
    CardsComponent,
    ListComponent,
    CardsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[    
    CardsComponent,
    ListComponent,
    CardsListComponent
  ]
})
export class CardsListModule { }
