import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.page.html',
  styleUrls: ['./menu-edit.page.scss'],
})
export class MenuEditPage implements OnInit {
  id: any;
  nama_menu: any;
  kategori: any;
  harga: any;
  constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilMenu(this.id);
    })
  }

  ngOnInit() {
  }

  ambilMenu(id: any) {
    this._apiService.lihat(id, '/lihatMenu.php?id=').subscribe({
    next: (hasil: any) => {
    console.log('sukses', hasil);
    let menu = hasil;
    this.nama_menu = menu.nama_menu;
    this.kategori = menu.kategori;
    this.harga = menu.harga;
    },
    error: (error: any) => {
    this._apiService.notif('gagal ambil data');
    }
    })
  }

  editMenu() {
    let data = {
    id: this.id,
    nama_menu: this.nama_menu,
    kategori: this.kategori,
    harga: this.harga,
    }
    this._apiService.edit(data, '/editMenu.php')
    .subscribe({
    next: (hasil: any) => {
    console.log(hasil);
    this.id = '';
    this.nama_menu = '';
    this.kategori = '';
    this.harga = '';
    this._apiService.notif('berhasil edit menu');
    this.router.navigateByUrl('/menu');
    },
  error: (err: any) => {
  this._apiService.notif('gagal edit menu');
      }
    })
  }
}
