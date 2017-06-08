import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {

  //private _el: ElementRef;

  constructor(public el: ElementRef) {
    console.log(el);
    //this._el = el;
    //el.nativeElement.style.visibility = "hidden"
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.textDecoration = "underline"
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textDecoration = "none"
  }

}
