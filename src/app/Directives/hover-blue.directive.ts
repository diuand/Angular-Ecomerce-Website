import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBlue]'
})
export class HoverBlueDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter') onMouseEnter() {
    const oppen_button = `
      transition: all 0.5s ease-out;
      color: white;
    `;
    const blue_color = `
        transition: all 0.4s ease-out;
        color: #1194fb;
      `;
      this.renderer.setAttribute(this.el.nativeElement, 'style', blue_color);
  }

  @HostListener('mouseleave') onMouseLeave()  {
    const oppen_button = `
      transition: all 0.5s ease-out;
      color: black;
    `;
    this.renderer.setAttribute(this.el.nativeElement, 'style', oppen_button);
  }
}
