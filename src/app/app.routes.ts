import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HeadChiefDetailsComponent } from './head-chief-details/head-chief-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'chief-details', component: HeadChiefDetailsComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
