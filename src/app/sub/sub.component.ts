import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngredientsComponent } from '../ingredients/ingredients.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-sub',
  imports: [OrderDetailsComponent,IngredientsComponent,RouterModule],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.css'
})
export class SubComponent {

}
