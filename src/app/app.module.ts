import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoElementComponent } from './to-do-element/to-do-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
