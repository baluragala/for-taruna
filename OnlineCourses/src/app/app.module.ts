import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes, Route} from '@angular/router'

import {SharedModule} from './shared/shared.module'

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {GoodByeComponent} from './good-bye/good-bye.component'

import {CourseModule} from './course/course.module';
import {CounterComponent} from './counter.component'
import {CourseListComponent} from "./course/course-list/course-list.component";
import {PageNotFoundComponent} from './page-not-found.component';


import {appRoutes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoodByeComponent,
    CounterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CourseModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
