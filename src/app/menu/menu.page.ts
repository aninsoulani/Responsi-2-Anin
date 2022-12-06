import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  page = 0;
  perPage = 10;
  menu: any[] = [];
  lists: any[] = [];
  constructor(public _apiService: ApiService, private alertController: AlertController) { }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getMenu();
  }

  paginateArray() {
    this.page++;
    return this.menu.filter(
    x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getMenu() {
    this._apiService.tampil('tampilMenu.php').subscribe({
    next: (res: any) => {
    console.log('sukses', res);
    this.menu = res;
    this.lists = this.paginateArray();
    },
    error: (err: any) => {
    console.log(err);
    },
   })
  }

  doRefresh(event: any) {
    console.log('Mulai Refresh Konten');
    setTimeout(() => {
      console.log('Selesai Refresh Konten');
      event.target.complete();
      this.page = 0;
      this.perPage = 10;
      this.getMenu();
      }, 2000);
    }     


  loadMore(event: any) {
    console.log(event);
    setTimeout(() => {
    const array = this.paginateArray();
    console.log('new data: ', array);
    this.lists = this.lists.concat(array);
    console.log('list data: ', this.lists);
    event.target.complete();
    if (array?.length < this.perPage) {
    event.target.disabled = true;
    };
   }, 1000);
  }

  deleteMenu(id: any) {
    this.alertController.create({
    header: 'perhatian',
    subHeader: 'Yakin menghapus data ini?',
    buttons: [
    {
    text: 'Batal',
    handler: (data: any) => {
    console.log('dibatalkan', data);
    }
    },
    {
    text: 'Yakin',
    handler: (data: any) => {
    //jika tekan yakin
    this._apiService.hapus(id, '/hapusMenu.php?id=').subscribe({
    next: (res: any) => {
    console.log('sukses', res);
    this.page = 0;
    this.perPage = 10;
    this.getMenu();
    },
    error: (error: any) => {
    this._apiService.notif('gagal');
    }
    })
    }
    }
  ]
  }).then(res => {
  res.present();
  })
  }  

  ngOnInit() {
  }

}
