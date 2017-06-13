import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-detail',
  template: `
    <h2>
       ID :  {{ id }}, Title :  {{ title }}
    </h2>
    <pre>
    {{queryParams | json }}
    </pre>
  `,
  styles: []
})
export class CourseDetailComponent implements OnInit {

  id;
  title;
  queryParams;

  constructor(private activateRoute: ActivatedRoute) {
    console.log(activateRoute);
  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['courseId'];
    this.title = this.activateRoute.snapshot.params['courseTitle'];
    this.queryParams = this.activateRoute.snapshot.queryParams;
  }

}
