import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTambahPageRoutingModule } from './menu-tambah-routing.module';

import { MenuTambahPage } from './menu-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTambahPageRoutingModule
  ],
  declarations: [MenuTambahPage]
})
export class MenuTambahPageModule {}
