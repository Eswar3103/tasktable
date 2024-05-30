import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  dataEmiiter = new EventEmitter<string>();

  raiseDataEventEmitter(id:string){
    this.dataEmiiter.emit(id)
    console.log(id);
    
  }
}
