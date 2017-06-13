import {CourseListItemComponent} from './course-list-item.component';
import {CourseListComponent} from './course-list/course-list.component';
import {Routes} from "@angular/router";
import {CourseDetailComponent} from "./course-detail.component";

export const courseRoutes: Routes = [
  {path: 'courses/:courseId/t/:courseTitle', component: CourseDetailComponent}
];
