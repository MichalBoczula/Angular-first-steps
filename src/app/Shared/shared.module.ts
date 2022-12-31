import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Star } from '../Star/star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Star],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Star,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
