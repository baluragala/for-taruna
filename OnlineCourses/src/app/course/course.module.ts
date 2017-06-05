import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseListItemComponent} from './course-list-item.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListItemComponent, CourseListComponent],
  exports: [CourseListComponent]
})
export class CourseModule {
}
