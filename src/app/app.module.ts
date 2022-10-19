import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { CollectionsComponent } from './collections/collections.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { CredintialsComponent } from './credintials/credintials.component';
import { HomeComponent } from './home/home.component';
import { StoresComponent } from './stores/stores.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CollectionsComponent,
    TrackOrderComponent,
    CredintialsComponent,
    HomeComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
