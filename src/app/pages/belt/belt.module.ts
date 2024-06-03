import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeltPageRoutingModule } from './belt-routing.module';

import { BeltPage } from './belt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeltPageRoutingModule
  ],
  declarations: [BeltPage]
})
export class BeltPageModule {}
