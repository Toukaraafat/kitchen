import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenService } from '../services/kitchen.service';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen = false; // Track the state of the sidebar
  constructor(private kitchenService: KitchenService) {
    this.kitchenService.isOpen$.subscribe((state) => {
      this.isSidebarOpen = state;
    });
  }

  toggleSidebar() {
    if (this.isSidebarOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }

  openSidebar() {
    this.kitchenService.openSidebar();
    // Manually trigger Bootstrap offcanvas
    const offcanvas = document.getElementById('offcanvasExample');
    if (offcanvas) {
      offcanvas.classList.add('show');
      offcanvas.style.visibility = 'visible';
    }
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
