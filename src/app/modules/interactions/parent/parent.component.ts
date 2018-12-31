import { Component, OnInit } from '@angular/core';
import { TextUtils } from '../../../shared/utils/text-utils';

@Component({
  selector: 'nostromo-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentServerElements = [{type: 'server', name: 'Thor', content: 'Of Asgard'}];
  debugInfo;

  constructor(private utils: TextUtils) {
       // Supply dummy data
    for (let i = 0;  i< 3; i++){
      this.parentServerElements.push({
          type: 'server',
          name: this.utils.generateRandomString(),
          content: this.utils.generateRandomString()
        });
    }
  }

  ngOnInit() {

  }

      onParentServerAdded(serverData: {serverName: string, serverContent: string}) {
        this.parentServerElements.push({
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent
        });
//          console.log('101 !!! onParentServerAdded', serverData);
      }

      onParentBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
        this.parentServerElements.push({
          type: 'blueprint',
          name: blueprintData.serverName,
          content: blueprintData.serverContent
        });
//          console.log('102 !!! onParentBlueprintAdded');
      }

    onParentMalevich(index) {
      this.debugInfo = index;
      this.parentServerElements.splice(index,1);
        console.log('103 !!! onParentMalevich', index);
    }

}
