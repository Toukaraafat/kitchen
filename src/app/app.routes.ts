// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { NgModule } from '@angular/core';
// import { HeadChiefDetailsComponent } from './head-chief-details/head-chief-details.component';
// import { OrderDetailsComponent } from './order-details/order-details.component';
// import { IngredientsComponent } from './ingredients/ingredients.component';
// import { LoginComponent } from './login/login.component';

// export const routes: Routes = [
//     { path: '', component: HomeComponent }, // Default route
//     { path: 'chief-details', component: HeadChiefDetailsComponent },
//     { path: 'order-details', component: OrderDetailsComponent },
//     { path: 'ingredients', component: IngredientsComponent },
//     { path: 'login', component: LoginComponent },

// ];
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeadChiefDetailsComponent } from './head-chief-details/head-chief-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component'; 
import {SubComponent } from './sub/sub.component'; 
import { KitchenTypeComponent } from './kitchen-type/kitchen-type.component';

export const routes: Routes = [
// pages include navbar and sidebar
    { 
        path: 'main', 
        component: MainComponent,
        children: [
            { path: 'chief-details', component: HeadChiefDetailsComponent },
        ]
    },
    // pages not include navbar and sidebar
    { 
        path: 'sub', 
        component: SubComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'kitchen-type', component: KitchenTypeComponent },

            { path: 'order-details', component: OrderDetailsComponent },
            { path: 'ingredients', component: IngredientsComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    { path: '', component: LoginComponent }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
