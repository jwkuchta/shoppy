// MY SOLUTION:
// import { Directive, OnInit, Input, HostBinding, ElementRef, Renderer2, HostListener } from "@angular/core";

// @Directive({
//     selector: '[appDropdown]'
// })

// export class DropdownDirective implements OnInit {
//     @Input() defaultClass: string = 'btn-group'
//     @Input() activeClass: string = 'btn-group open'

//     @HostBinding('class') className: string = this.defaultClass
//     constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

//     ngOnInit() {
//         this.className = this.defaultClass
//     }

//     @HostListener('click') click(eventData) {
//         if(this.className === this.defaultClass) {
//             this.className = this.activeClass
//         } else {
//             this.className = this.defaultClass
//         } 
//     }

// }

// HIS SOLUTION

import { Directive, HostListener, HostBinding } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}