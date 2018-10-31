import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: 'app-servers',
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addNewServer = false;
  serverCreatedStatus = 'No server created';
  serverCreation = false;
  serverName = 'aTinyServer';
  constructor() {

    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreation = true;
    this.serverCreatedStatus = 'A server has been created with a name of ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    console.log('Event emitted is' + event);
  }
}
