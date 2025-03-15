import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor() { }
  private isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpen.asObservable(); // Observable to listen in other components

  openSidebar() {
    this.isOpen.next(true);
  }

  closeSidebar() {
    this.isOpen.next(false);
  }

}
