import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CollectionsComponent } from './collections/collections.component';
import { CredintialsComponent } from './credintials/credintials.component';
import { HomeComponent } from './home/home.component';
import { StoresComponent } from './stores/stores.component';
import { TrackOrderComponent } from './track-order/track-order.component';

const routes: Routes = [
  {path:"collections",component:CollectionsComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"track-order",component:TrackOrderComponent},
  {path:"appointment",component:CredintialsComponent},
  {path:'our-stores',component:StoresComponent},
  {path:"",component:HomeComponent},  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
