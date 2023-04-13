
import { Directive, ElementRef,HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtonHeader]'
})
export class ButtonHeaderDirective implements OnChanges {
  @Input() public appHighlight: any;
  constructor(private el: ElementRef, private renderer: Renderer2) { }



  ngOnChanges(changes : any) {
    const oppen_button = `
      transition: all 0.5s ease-out;
      color: white;
    `;
    const close_button = `
        transition: all 0.5s ease-out;
        color: red;
      `;
    if (this.appHighlight == 'close'){
      this.renderer.setAttribute(this.el.nativeElement, 'style', close_button);
    }
    else{
      this.renderer.setAttribute(this.el.nativeElement, 'style', oppen_button);
    }



  }

}

