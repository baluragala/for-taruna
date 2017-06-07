import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  template: `
    <div class="container">
      <img class="thumbnail left" [src]="course.image"/>
      <div class="detail">
        <h1>{{sno + 1 }} - {{course.title}}</h1>
        <h3>by {{course.author}}</h3>
        <button *ngIf="course.enrolled === true" class="unenroll" (click)="unEnroll(course)">Un Enroll</button>
        <button *ngIf="course.enrolled === false" class="enroll" (click)="enroll(course)">Enroll</button>
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
      }`,
    `.enroll{
     width: 150px;
     height: 40px;
     background-color: cadetblue;
     font-size: 1.7em;
     margin-bottom: 5px;
     }`,
    `
.unenroll{
     width: 150px;
     height: 40px;
     background-color: tomato;
      font-size: 1.7em;
      margin-bottom: 5px;
     }
`
  ]
})
export class CourseListItemComponent implements OnInit {

  @Input() course;//= {title: 'Angular 2', author: 'James'};
  @Input() title;
  @Input() author;
  @Input() sno;

  @Output() enrollEvent: EventEmitter<{title: string, author: string, image: string}> = new EventEmitter();
  @Output() unEnrollEvent: EventEmitter<{title: string, author: string, image: string}> = new EventEmitter();


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

  unEnroll(course) {
    console.log('UnEnroll Request for course', course);
    this.unEnrollEvent.emit(course);
  }
}
