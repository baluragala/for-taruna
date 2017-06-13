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


  staticCourses = [{id: 1, title: 'React', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false},
    {id: 2, title: 'Angular', author: 'Jack', image: '../../assets/images/angular.png', enrolled: true},
    {id: 3, title: 'Ember', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false},
    {id: 4, title: 'Vue', author: 'Jack', image: '../../assets/images/angular.png', enrolled: false}
  ];


  toggle: boolean = false;

  /* toggleIt() {
   this.toggle = !this.toggle;
   }*/

  courses = [];

  searchTerm: string = '';

  enrolledCourses = [];

  constructor() {
  }

  changeCourse() {
    //this.searchTerm = 'Updated';
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.searchTerm);
    if (this.searchTerm.length == 0)
      this.courses = this.staticCourses;
    else {
      let result = this.courses.filter((course) => course.title.includes(this.searchTerm))
      this.courses = result
    }
  }

  enroll(course) {
    console.log('Enroll request from child to parent', course);
    let filteredCourses = this.enrolledCourses.filter((c) => c.title !== course.title);
    course.enrolled = true;
    filteredCourses.push(course);
    this.enrolledCourses = filteredCourses;
  }

  unEnroll(course) {
    console.log('Enroll request from child to parent', course);
    let filteredCourses = this.enrolledCourses.filter((c) => c.title !== course.title);
    course.enrolled = false;
    filteredCourses.push(course);
    this.enrolledCourses = filteredCourses;

  }

  searchTermChanged(searchTerm) {
    this.searchTerm = searchTerm.target.value;
    console.log('searchTerm', searchTerm.target.value);
  }
}
