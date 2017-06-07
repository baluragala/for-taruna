import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {CourseListItemComponent} from './course-list-item.component';
import {CourseListComponent} from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CourseListItemComponent, CourseListComponent],
  exports: [CourseListComponent]
})
export class CourseModule {
}
