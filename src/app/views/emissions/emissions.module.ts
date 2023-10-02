import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissionsComponent } from './emissions.component';
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {BrowserModule} from "@angular/platform-browser";

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
    FormsModule,
    DropdownModule,
  ]
})
export class EmissionsModule { }
