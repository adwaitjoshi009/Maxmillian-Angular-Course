import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //             <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true
  serverStatus = 'No server is created.'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverStatus = 'New Server is added.'
  }

}
