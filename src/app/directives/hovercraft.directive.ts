import { Directive , HostListener} from '@angular/core';

@Directive({
  selector: '[nostromoHovercraft]',
  host: {
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HovercraftDirective {

  constructor() { }
// Main description of host definition
/*All arguments you would like to access in the event handler method should be included in that array first.*/
  @HostListener('mouseenter', ['"hello!"','$event'])
    onMouseEnter(greeting: string, event: any) {
      console.log('401 break and enter !!!', greeting, event);
    }
// Another way of defining in @Directive
  onMouseLeave(){
        console.log('402 exit !!!');
    }

//  @HostListener('click', ['$event'])
//    onHostClick(event: Event) {
//      console.log('403');
//    }

}
