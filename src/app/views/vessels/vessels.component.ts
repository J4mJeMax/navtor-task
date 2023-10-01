import { Component } from '@angular/core';
import {Vessel} from "../../shared/interfaces/vessels/vessels";
import {VesselsService} from "../../services/vessels/vessels.service";

@Component({
  selector: 'app-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss']
})
export class VesselsComponent {
  vessels: Vessel[] = [];

  constructor(private vesselService: VesselsService) {}

  ngOnInit(): void {
    this.vesselService.getVessels().subscribe((data) => {
      this.vessels = data;
    });
  }
}
