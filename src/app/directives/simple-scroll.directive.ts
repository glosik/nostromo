import { Directive, OnInit, HostListener, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, from, } from 'rxjs';
import { map , throttleTime, distinctUntilChanged} from 'rxjs/operators';

@Directive({
  selector: '[nostromoSimpleScroll]'
})
export class SimpleScrollDirective implements OnInit, AfterViewInit {

  inView:any = [];
  nerge$;

  private _intersectionObserver? : IntersectionObserver;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const refChild = this.el.nativeElement;
//    if (window.pageYOffset > refChild.offsetTop) {
//      console.log('!!! window', refChild.offsetTop, refChild.id, this.inView);
//    }
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(30),
      map(() => window.pageYOffset),
      distinctUntilChanged()
    );

//    scroll$.subscribe((x:any) => (console.log(x)));
//    this.nerge$.subscribe((x:any) => (console.log(x)));


    this._intersectionObserver = new IntersectionObserver(entries => {
        this.checkForIntersection(entries);
    }, {});
    this._intersectionObserver.observe(<Element>(this.el.nativeElement));
//    this.append();
//    this.prepend();
    //console.log('!!! parent', this.el.nativeElement.id);
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
        if (!this.checkIfIntersecting(entry)) {
          const arr = [];
//          this.nerge$ =   create(entry.target.id);
//          this.nerge$.subscribe((x:any) => (console.log(x)));
         // const boo = entry.filter(data => data);
//             console.log('!!!', this.inView);


            //this.deferLoad.emit();
            //this._intersectionObserver.unobserve(<Element>(this.el.nativeElement));
            //this._intersectionObserver.disconnect();
        }
    });
}

private checkIfIntersecting (entry: IntersectionObserverEntry) {
    return (<any>entry).isIntersecting && entry.target === this.el.nativeElement;
}

  inViewport(visible){
    console.log('!!! visible', visible.target.id);
  }

  prepend() {
    const div = this.renderer.createElement('p');
    const text = this.renderer.createText('Sentinel before!');
    this.renderer.appendChild(div, text);

    const parent = this.el.nativeElement.parentNode;
    const refChild = this.el.nativeElement;
    this.renderer.insertBefore(parent, div, refChild);
    this.renderer.setProperty(div, 'id', 'before');
  }

  append() {
    const div = this.renderer.createElement('p');
    const text = this.renderer.createText('sentinel after!');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
    this.renderer.setProperty(div, 'id', 'after');
  }

}


// will only work if element scrollable  in css , hence has height and overflow-y: scroll
//  @HostListener('scroll', ['$event'])
//  onElementScroll(event: any) {
//    console.log('bollocks!!!');
//  }

//  @HostListener('document:scroll', ['$event'])
//  onDocumentScroll(event: any) {
//    const refChild = this.el.nativeElement.getBoundingClientRect();
//     console.log('!!! document', refChild);
//  }
