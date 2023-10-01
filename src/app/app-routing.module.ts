import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/vessels', pathMatch: 'full' },
  { path: 'vessels', loadChildren: () => import('./views/vessels/vessels.module').then(m => m.VesselsModule) },
  { path: 'emissions', loadChildren: () => import('./views/emissions/emissions.module').then(m => m.EmissionsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
