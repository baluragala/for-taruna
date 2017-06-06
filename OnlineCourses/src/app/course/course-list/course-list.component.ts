import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  course1 = {title: 'React', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false};
  course2 = {title: 'Angular', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false};
  course3 = {title: 'Ember', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false};
  course4 = {title: 'Vue', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false};

  courses = [{title: 'React', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false},
    {title: 'Angular', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false},
    {title: 'Ember', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false},
    {title: 'Vue', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false}
  ];

  enrolledCourses = [];

  constructor() {
  }

  changeCourse() {
    //this.course3 = {title: 'EmberJS', author: 'Jack'};
  }

  ngOnInit() {
  }

  enroll(course) {
    console.log('Enroll request from child to parent', course);
    this.enrolledCourses.push(course.title);

  }
}
