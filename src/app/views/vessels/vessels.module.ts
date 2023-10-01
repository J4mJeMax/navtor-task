import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VesselsComponent} from "./vessels.component";
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";


const Routes = RouterModule.forChild([
  { path: '', component: VesselsComponent },
])

@NgModule({
  declarations: [VesselsComponent],
  imports: [
    CommonModule,
    TableModule,
    Routes
  ]
})
export class VesselsModule { }
