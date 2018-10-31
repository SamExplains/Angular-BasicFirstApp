import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: red;
  }`]
})
export class ServerComponent {
   serverId = 10;
   serverStatus = 'offline';

   constructor() {
     this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
   }

  newColor() {
    return 'blue';
  }
}
