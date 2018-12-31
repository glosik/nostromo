import { fromEvent} from "rxjs";
import { Injectable} from "@angular/core";
import { map} from "rxjs/operators";
import { Observable} from "rxjs";

type Target = Document;

@Injectable({
    providedIn: 'root'
})
export class ScrollListenerService {

    constructor() {}

    public getScroll(node: Target = document): number {
        var currentScroll = this.getCurrentScroll(node);
        console.log('node', typeof node);
        var maxScroll = this.getMaxScroll(node);
        var percent = (currentScroll / Math.max(maxScroll, 1));
        percent = Math.max(percent, 0);
        percent = Math.min(percent, 1);
        return (percent * 100);
    }


    public getScrollAsStream(node: Target = document): Observable < number > {
            var stream = fromEvent(window, "scroll")
            .pipe(
                map((event: UIEvent): number => { return (this.getScroll(node));}
                )
            );
        return (stream);
    }

    private getCurrentScroll(node: Target): number {
        return (window.pageYOffset);
    }

    private getMaxScroll(node: Target): number {

        var scrollHeight = Math.max(
//            node.body.scrollHeight,
//            node.body.offsetHeight,
//            node.body.clientHeight,
//            node.documentElement.scrollHeight,
//            node.documentElement.offsetHeight,
//            node.documentElement.clientHeight
        );

        var clientHeight = node.documentElement.clientHeight;

        return (scrollHeight - clientHeight);

    }
}
