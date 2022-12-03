import { Component } from "@angular/core"

@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
    styles: [`h3 {color: cyan}`]

})
export class ServerComponent {
    serverId: number = 1
    serverStatus: string = 'running'
    // these are class properties.

    getServerStatus(){
        return this.serverStatus
    }
}