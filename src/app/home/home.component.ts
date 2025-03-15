import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private kitchenService: KitchenService) {}
  isSidebarOpen = false;


  ngOnInit() {
    this.kitchenService.isOpen$.subscribe((state) => {
      this.isSidebarOpen = state;
    });
  }
  closeSidebar() {
    this.kitchenService.closeSidebar();
    // Manually close Bootstrap offcanvas
    const offcanvas = document.getElementById('offcanvasExample');
    if (offcanvas) {
      offcanvas.classList.remove('show');
      offcanvas.style.visibility = 'hidden';
    }
  }
}
