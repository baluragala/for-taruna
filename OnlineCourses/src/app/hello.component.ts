/*
 1. class
 2. metadata
 3. template
 */
import {Component} from "@angular/core";

@Component({
  selector:'app-hello',
  template:`
      <h1>This from hello</h1>
      <app-good-bye></app-good-bye>
  `
})
export class HelloComponent {

}
