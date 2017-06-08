import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }

  @Input() set appFor(num: number) {
    for (let i = 1; i <= num; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }

}
