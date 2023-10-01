import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissionsComponent } from './emissions.component';
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [
    EmissionsComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class EmissionsModule { }
