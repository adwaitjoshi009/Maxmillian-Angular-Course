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
  serverName = 'Vesper'
  serverPresent = false
  servers = ['Testserver1', 'Testserver2']
  someArray = [1, 2, 3, 4, 5]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer
    }, 2000)
  }
  
  ngOnInit(): void {
  }
  
  onCreateServer() {
    this.serverStatus = 'New Server is added. Name is: ' + this.serverName
    this.serverPresent = true
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(this.serverName)
  }

}
