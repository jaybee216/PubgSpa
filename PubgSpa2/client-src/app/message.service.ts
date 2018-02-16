import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  log(message: string) {
    console.log(message);
  }
}
