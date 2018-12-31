import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  statusUpdate = new EventEmitter<string>();
  constructor() { }
}
