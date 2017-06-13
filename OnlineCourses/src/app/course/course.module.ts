import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {CourseListItemComponent} from './course-list-item.component';
import {CourseListComponent} from './course-list/course-list.component';
import {SharedModule} from '../shared/shared.module';
import {CourseDetailComponent} from './course-detail.component'
import {RouterModule} from '@angular/router'
import {courseRoutes} from './course.routes'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(courseRoutes)
  ],
  declarations: [CourseListItemComponent, CourseListComponent, CourseDetailComponent],
  exports: [CourseListComponent]
})
export class CourseModule {
}
