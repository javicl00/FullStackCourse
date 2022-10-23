import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {//The add() method pushes a message into the array of messages.
    this.messages.push(message);
  }

  clear() {//The clear() method clears the array of messages.
    this.messages = [];
  }
}
