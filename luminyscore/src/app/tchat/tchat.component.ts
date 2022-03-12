import { Component, Input, OnInit } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.scss']
})
export class TchatComponent implements OnInit {

  srvMessage: string[] = [];
  webSocket: WebSocket;
  serverUrl = 'ws://localhost:8085';
  @Input() messageToSend: string;

  constructor(private wsService: WebSocketService) { 
    this.wsService.createObservableSocket(this.serverUrl).subscribe(data => {
      this.srvMessage.push(data);
    });
     
  }

  onSend() {
    this.wsService.sendMessage(this.messageToSend) ;
    this.messageToSend = '';
    }
   
  ngOnInit(): void {
  }

}
