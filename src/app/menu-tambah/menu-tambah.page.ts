import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu-tambah',
  templateUrl: './menu-tambah.page.html',
  styleUrls: ['./menu-tambah.page.scss'],
})
export class MenuTambahPage implements OnInit {
  id: any;
  nama_menu: any;
  kategori: any;
  harga: any;
  constructor(private router: Router, public _apiService: ApiService) { }

  ngOnInit() {
  }

  addMenu(){
    let data = {
      nama_menu: this.nama_menu,
      kategori: this.kategori,
      harga: this.harga,
      }
      this._apiService.tambah(data, '/tambahMenu.php')
      .subscribe({
      next: (hasil: any) => {
      console.log(hasil);
      this.id = '';
      this.nama_menu = '';
      this.kategori = '';
      this.harga = '';
      this._apiService.notif('berhasil input menu');
      this.router.navigateByUrl('/menu');
      },
      error: (err: any) => {
      this._apiService.notif('gagal input menu');
      }
      })
     
  }
}
