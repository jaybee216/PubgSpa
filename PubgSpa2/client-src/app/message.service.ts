import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  //messages: string[] = [];

  constructor() { }

  //add(message: string) {
  //  this.messages.push(message);
  //}

  //clear() {
  //  this.messages = [];
  //}

  log(message: string) {
    console.log(message);
  }
}
