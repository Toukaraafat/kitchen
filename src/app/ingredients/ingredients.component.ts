import { Component } from '@angular/core';
import { IngredientsWayStepsService } from '../services/ingredients-way-steps.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredients',
  imports: [CommonModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent {
  ingredient!:any
  noteSteps!:any[]
  recipeSteps!:any[]
  constructor(private   ingredientsWayStepsService:IngredientsWayStepsService){ }
  ngOnInit(): void {

    this.ingredientsWayStepsService.getDishIngredients(93).subscribe({
      next: (response) => {
      const data=response.data
        this.ingredient=data.Ingredient[0]
        this.recipeSteps=data.recipe_steps
        this.noteSteps=data.note_steps
        console.log('recipeSteps:', this.ingredient);
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
