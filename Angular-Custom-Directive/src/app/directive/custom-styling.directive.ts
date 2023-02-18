import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyling]'
})
export class CustomStylingDirective implements OnInit {
  // @Input() styleSheet!: string;
  @Input('appCustomStyling') class: string = "newclass";
  // @Input() defaultColor: string = 'transparent';
  // @Input('appRefractoredDirective') highlightColor: string = 'blue';

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.addClass(this.el.nativeElement, this.class);
  }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.class);
    // const link = this.renderer.createElement('link');
    // this.renderer.setAttribute(link, 'rel', 'stylesheet');
    // this.renderer.setAttribute(link, 'href', this.styleSheet);
    // this.renderer.appendChild(this.el.nativeElement, link);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');+
  }

  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  //   this.backgroundColor = this.highlightColor;
  // }

  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  //   this.backgroundColor = this.defaultColor;
  // }
}
