import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverOpacity9]'
})
export class HoverOpacity9Directive  {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeOpacity(0.9); // Change to your desired color on hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeOpacity(1); // Reset the color when the hover is removed
  }

  private changeOpacity(opacity: number) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', opacity.toString());
  }
}
