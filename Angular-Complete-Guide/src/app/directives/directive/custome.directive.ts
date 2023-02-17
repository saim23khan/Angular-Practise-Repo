import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appCustomDirective]'
})

export class CustomDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style = 'background-color: red;padding: 10px;';
    }

}