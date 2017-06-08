import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GoodByeComponent } from './good-bye/good-bye.component'

import {CourseModule} from './course/course.module';
import { CounterComponent } from './counter.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoodByeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CourseModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
