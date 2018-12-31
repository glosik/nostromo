import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription,  Observable} from 'rxjs';
import { ScrollListenerService } from '../services/scroll-listener.service';

@Directive({
    selector: '[nostromoScrollListener]',
    outputs: [ "scrollPercentageEvent: scrollPercentage" ]
})
export class ScrollListenerDirective implements OnInit, OnDestroy {
    public scrollPercentageEvent: EventEmitter < number > ;

    private elementRef: ElementRef;
    private elementScrollPercentage: ScrollListenerService;
    private subscription: Subscription;

    constructor(elementRef: ElementRef,elementScrollPercentage: ScrollListenerService) {
        this.elementRef = elementRef;
        this.elementScrollPercentage = elementScrollPercentage;
        this.scrollPercentageEvent = new EventEmitter();
        this.subscription = null;
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public ngOnInit(): void {
        this.subscription = this.elementScrollPercentage
            .getScrollAsStream(this.elementRef.nativeElement)
            .subscribe(
                (percent: number): void => {
                    this.scrollPercentageEvent.next(percent);
                }
            );
    }

}
