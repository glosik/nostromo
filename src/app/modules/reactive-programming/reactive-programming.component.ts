import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'nostromo-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.scss']
})
export class ReactiveProgrammingComponent implements OnInit {
  sub: Subscription;
  version;
  constructor() { }

  ngOnInit() {
    this.version = environment.appVersion;
    const myNumbers$ = interval(1000);

  //1.shorter notation
  // myNumbers$.subscribe(val => console.log(val));

    //2.longer definition
//   this.sub = myNumbers$.subscribe(
//     (number:number) => {
//       console.log(number*2);
//     }
//   );

  }

}
