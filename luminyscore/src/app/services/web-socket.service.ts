import { Observable } from "rxjs";

export class WebSocketService {
    webSocket : WebSocket;
    constructor () {
        
    }

    public createObservableSocket(url:string):Observable<string>{
        this.webSocket = new WebSocket(url);
        return new Observable(result => {
            this.webSocket.onmessage = (message) => result.next(message.data);
            this.webSocket.onerror = (message) => result.error(message);
            this.webSocket.onclose = (message) => result.complete();
        })
    }
    public sendMessage (message: any) {
        this.webSocket.send(message);
    }
}
