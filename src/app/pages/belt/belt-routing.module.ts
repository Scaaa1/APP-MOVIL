import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeltPage } from './belt.page';

const routes: Routes = [
  {
    path: '',
    component: BeltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeltPageRoutingModule {}
