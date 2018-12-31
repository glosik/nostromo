import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[nostromoScrollSpy]'
})
export class ScrollSpyDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string;

    constructor(private _el: ElementRef) {console.log('scrolio!', this._el);}

    @HostListener("window:scroll", ['$event'])
            onWindowScroll(event: any) {

        const children = this._el.nativeElement.children;
                //console.log('!!!', event.target, children);
    }
    @HostListener('scroll', ['$event'])onScroll(event: any) {
        console.log('balls!!!');
    }
    @HostListener('scroll', ['$event'])
        onElementScroll($event) {
            console.log('bollocks!!!');
        }
/*@HostListener('scroll', ['$event']) won't work if the host element itself is not scroll-able.*/

//    @HostListener('scroll', ['$event'])onScroll(event: any) {
//        let currentSection: string;
//        const children = this._el.nativeElement.children;
//        const scrollTop = event.target.scrollTop;
//        const parentOffset = event.target.offsetTop;
//        console.log('scrolean !');
//        for (let i = 0; i < children.length; i++) {
//            const element = children[i];
//            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
//                if ((element.offsetTop - parentOffset) <= scrollTop) {
//                    currentSection = element.id;
//                }
//            }
//        }
//        if (currentSection !== this.currentSection) {
//            this.currentSection = currentSection;
//            this.sectionChange.emit(this.currentSection);
//        }
//    }

}
