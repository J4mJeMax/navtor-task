import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissionsComponent } from './emissions.component';
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

const Routes = RouterModule.forChild([
  { path: '', component: EmissionsComponent },
])

@NgModule({
  declarations: [
    EmissionsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    Routes,
    FormsModule
  ]
})
export class EmissionsModule { }
