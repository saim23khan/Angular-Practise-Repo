import {ComponentFactoryResolver, Directive, Injector, Input, Type, ViewContainerRef} from '@angular/core';
import {CustomStylingDirective} from "./custom-styling.directive";

@Directive({
  selector: '[appDynamicDirective]'
})
export class DynamicDirectiveDirective {

  @Input('appDynamicDirective') directiveType!: string;
  constructor(
    // private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  ngOnInit() {
    if (this.directiveType) {
      // const factory = this.componentFactoryResolver.resolveComponentFactory(this.directiveType);
      // const componentRef = factory.create(this.viewContainerRef.injector);
      // this.viewContainerRef.insert(componentRef.hostView);
      // @ts-ignore
      this.viewContainerRef.createComponent(this.directiveType,{injector: this.injector});
    }
  }
}
