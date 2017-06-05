import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  template: `
    <div>
      <img class="thumbnail left" src="../../assets/images/angular.png"/>
      <div class="detail">
        <h3>{{course.title}}</h3>
        <h4>by {{course.author}}</h4>
      </div>
    </div>
  `,
  styles: [
    `.thumbnail{width:100px;height:100px}`,
    `.detail{display: inline}`
  ]
})
export class CourseListItemComponent implements OnInit {

  @Input() course;//= {title: 'Angular 2', author: 'James'};

  constructor() {
  }

  ngOnInit() {
  }

}
