import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HiddenDirective} from './hidden.directive';
import {IfDirective} from './if.directive';
import {ForDirective} from './for.directive';
import { PowerOfPipe } from './power-of.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HiddenDirective, IfDirective, ForDirective, PowerOfPipe],
  exports: [HiddenDirective, IfDirective, ForDirective, PowerOfPipe]
})
export class SharedModule {
}
