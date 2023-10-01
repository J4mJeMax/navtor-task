import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Vessels',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/vessels']
      },
      {
        label: 'Emissions',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['/emissions']
      }
    ];
  }
}
