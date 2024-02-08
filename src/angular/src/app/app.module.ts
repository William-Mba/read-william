import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from 'ng-tailwind-core';

const ngTailwindComponents = [
  InputComponent
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...ngTailwindComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
