import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VesselsComponent} from "./vessels.component";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [VesselsComponent],
  imports: [
    CommonModule,
    TableModule,
  ]
})
export class VesselsModule { }
