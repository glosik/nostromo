import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'nostromo-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.scss']
//    ,
//  encapsulation: ViewEncapsulation.None
})
export class DaughterComponent implements OnInit {

@Input()
  element: {type: string, name: string, content: string};
@Input()
  nando;

/*This will configure the metadata necessary to tell Angular this property is to be treated as an output binding. However, it needs to sit alongside something called the EventEmitter.*/
@Output()
  // To be able to use our Output,
  // we need to import and bind a new instance of the EventEmitter to it
  constructivism: EventEmitter<any> = new EventEmitter<any>();

  constructor(private emitterSrv: EmitterService) { }

  ngOnInit() {
  }

  invokeEmitter(data, event) {
    // Invoking the EventEmitter instance
    this.constructivism.emit(data);
      console.log('303 !!!  invokeEmitter:', data, event);
    this.emitterSrv.statusUpdate.emit('some string emit');
  }

}
