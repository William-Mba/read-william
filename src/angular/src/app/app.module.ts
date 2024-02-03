import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { UsageExampleComponent } from './usage-example/usage-example.component';
import { NgTemplateOutletExampleComponent } from './ng-template-outlet-example/ng-template-outlet-example.component';
import { CardItemDirective } from './card-item.directive';
import { ListItemDirective } from './list-item.directive';
import { BaseComponent } from './base/base.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { NgTemplateOutletExample2Component } from './ng-template-outlet-example2/ng-template-outlet-example2.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOrListViewComponent,
    UsageExampleComponent,
    NgTemplateOutletExampleComponent,
    CardItemDirective,
    ListItemDirective,
    BaseComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    NgTemplateOutletExample2Component,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
