import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PBBPage } from './pbb.page';

const routes: Routes = [
  {
    path: '',
    component: PBBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PBBPageRoutingModule {}
