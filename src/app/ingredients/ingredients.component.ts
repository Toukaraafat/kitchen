import { Component } from '@angular/core';
import { IngredientsWayStepsService } from '../services/ingredients-way-steps.service';

@Component({
  selector: 'app-ingredients',
  imports: [],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent {
  ingredient!:any[]
  noteSteps!:any[]
  recipeSteps!:any[]
  constructor(private   ingredientsWayStepsService:IngredientsWayStepsService){ }
  ngOnInit(): void {

    this.ingredientsWayStepsService.getDishIngredients(97, 69).subscribe({
      next: (response) => {
        console.log('Success:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Request completed.');
      }
    });
    
  }
  
}
