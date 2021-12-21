import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemStatusComponent} from "./item-status/item-status.component";



@NgModule({
  declarations: [ItemStatusComponent],
  exports:[ItemStatusComponent],
  imports: [
    CommonModule
  ]
})
export class ItemStatusModule { }
