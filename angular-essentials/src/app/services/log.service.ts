import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  log(message: any): void {
    const date: Date = new Date();
    console.log(`${date} - ${message}`)
  }

  constructor() { }
}
