import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {CourseListItemComponent} from './course-list-item.component';
import {CourseListComponent} from './course-list/course-list.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [CourseListItemComponent, CourseListComponent],
  exports: [CourseListComponent]
})
export class CourseModule {
}
