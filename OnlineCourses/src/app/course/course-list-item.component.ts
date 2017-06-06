import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  template: `
    <div class="container">
      <img class="thumbnail left" [src]="course.image"/>
      <div class="detail">
        <h1>{{sno}} - {{course.title}}</h1>
        <h3>by {{course.author}}</h3>
        <button (click)="enroll(course)">{{ course.enrolled === true ? 'UnEnroll':'Enroll' }}</button>
      </div>
    </div>
  `,
  styles: [
    `.container {
        width:70%; 
        margin: 0 auto; 
        display: flex;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27);
        justify-content: flex-start;
        margin-top: 10px;
        }`,
    `.thumbnail{
        width:100px;
        height: 100px;
      }`,
    `.detail{
        display: inline
      }`
  ]
})
export class CourseListItemComponent implements OnInit {

  @Input() course;//= {title: 'Angular 2', author: 'James'};
  @Input() title;
  @Input() author;
  @Input() sno;

  @Output() enrollEvent: EventEmitter<{title: string, author: string, image: string}> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Course', this.course);
  }

  enroll(course) {
    console.log('Enroll Request for course', course);
    this.enrollEvent.emit(course);
  }
}
