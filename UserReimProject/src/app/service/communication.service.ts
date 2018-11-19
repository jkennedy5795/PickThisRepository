import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  $listItems = new Subject<string>();

  constructor() { }

  submitNewValue(value: string) {
    this.$listItems.next(value);
  }
  callAllReim(){
    
  }
}
