import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PBBPageRoutingModule } from './pbb-routing.module';

import { PBBPage } from './pbb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PBBPageRoutingModule
  ],
  declarations: [PBBPage]
})
export class PBBPageModule {}
