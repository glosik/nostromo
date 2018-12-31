import { Directive, AfterViewInit, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
//Creates an observable sequence by adding an event listener to the matching DOMElement
import { map ,
        throttleTime,
//Returns an Observable that emits only the first item emitted by the source Observable during sequential time windows of a specified duration.
        pairwise,
//Triggers on the second and subsequent triggerings of the input observable. The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
        distinctUntilChanged,
//Since we are only interested in the changes of the direction, we can remove the repeated events with the use of the distinctUntilChanged operator
// Returns an observable sequence that contains only distinct contiguous elements
        share,
// Returns an observable sequence that shares a single subscription to the underlying sequence.
        filter } from 'rxjs/operators';


enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Directive({
  selector: '[nostromoReactiveStickyHeader]'
})

export class ReactiveStickyHeaderDirective implements AfterViewInit {
  private isVisible = true;

//  @HostBinding('@toggle')
//  get toggle(): VisibilityState {
//    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
//  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );
    //map the window object to the pageYOffset, which returns the number of pixels the document is currently scrolled along the vertical axis
    //group the values emitted by the scroll stream in pairs with the use of thepairwise operator

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown.subscribe(() => (this.isVisible = false));
  }
}
