import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {GoodByeComponent} from './good-bye/good-bye.component'

import {CourseModule} from './course/course.module';
import {CounterComponent} from './counter.component'
import {CourseListComponent} from "./course/course-list/course-list.component";
import {PageNotFoundComponent} from './page-not-found.component';
import {Route} from "@angular/router";

export const appRoutes: Route[] = [
  {path: 'hello', component: HelloComponent},
  {path: 'good-bye', component: GoodByeComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'courses', component: CourseListComponent},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
