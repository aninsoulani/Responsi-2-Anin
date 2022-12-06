import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTambahPage } from './menu-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTambahPageRoutingModule {}
