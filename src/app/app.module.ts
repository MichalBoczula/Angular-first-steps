import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ProductModule } from './ProductsList/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "home", pathMatch: 'full' },
    { path: "**", redirectTo: "home", pathMatch: 'full' },
  ]), ProductModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
