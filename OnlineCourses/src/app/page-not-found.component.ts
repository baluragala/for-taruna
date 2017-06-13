import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h3>
      Sorry, we cannot find the page you are looking for
    </h3>
    <a routerLink="/courses">Click Here To See Courses</a>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
