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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer
    }, 2000)
  }

  ngOnInit(): void {
  }

}
