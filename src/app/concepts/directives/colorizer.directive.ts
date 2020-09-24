import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {


  constructor( private elRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside Constructor');
    console.log(this.elRef.nativeElement); // step 1: find the element in which the directive is used
    const divElement = this.elRef.nativeElement;
    // divElement.style.backgroundColor = 'red'; // javascript logic
    this.renderer.setStyle(divElement, 'background-color', 'red'); // step 2: pass on special instr on that element.
    this.renderer.setStyle(divElement, 'color', 'white');
  }


}
