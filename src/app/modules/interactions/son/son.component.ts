import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'nostromo-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
//    ,
//  encapsulation: ViewEncapsulation.None
})
export class SonComponent implements OnInit {
  @Output() sonServerCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() sonBlueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

    newServerName = '';
    newServerContent = '';

    constructor(private emitSrv: EmitterService) {
 this.emitSrv.statusUpdate.subscribe(
   (status: string) => console.log('!!! subscription to service emiter in son component', status)
 );
    }

    ngOnInit() {}

     onSonAddServer() {
        this.sonServerCreated.emit({
          serverName: this.newServerName,
          serverContent: this.newServerContent
        });
//         console.log('201 !!! onSonAddServer');
      }

      onSonAddBlueprint() {
        this.sonBlueprintCreated.emit({
          serverName: this.newServerName,
          serverContent: this.newServerContent
        });
//          console.log('202!!! onSonAddBlueprint');
      }

}
