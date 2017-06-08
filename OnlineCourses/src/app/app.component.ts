import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Courses';
  subTitle: string = 'by Zeolearn';
  course = {
    title: 'Angular',
    desc: 'Front End Framework.'
  };

  today = Date.now();

  getPrice() {
    return 100;
  }

  getCourseAsString(data) {
    return JSON.stringify(data);
  }
}
