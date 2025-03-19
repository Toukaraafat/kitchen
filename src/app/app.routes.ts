import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HeadChiefDetailsComponent } from './head-chief-details/head-chief-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'chief-details', component: HeadChiefDetailsComponent },
    { path: 'order-details', component: OrderDetailsComponent },
    { path: 'ingredients', component: IngredientsComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
