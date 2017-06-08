import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HiddenDirective} from './hidden.directive';
import {IfDirective} from './if.directive';
import {ForDirective} from './for.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HiddenDirective, IfDirective, ForDirective],
  exports: [HiddenDirective, IfDirective, ForDirective]
})
export class SharedModule {
}
