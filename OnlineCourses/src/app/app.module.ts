import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GoodByeComponent } from './good-bye/good-bye.component'

import {CourseModule} from './course/course.module'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoodByeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
