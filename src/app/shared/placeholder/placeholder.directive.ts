import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
    // this gives you access to the place at the pointer where this directive is used
    // public and used in Auth Component
    constructor(public viewContainerRef: ViewContainerRef) {}
}