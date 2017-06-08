import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
    console.log(templateRef);
    console.log(viewContainerRef);

  }

  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }
}
