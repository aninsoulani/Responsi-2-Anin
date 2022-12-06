import { Component } from '@angular/core';
 @Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
 })
 export class AppComponent {
 public appPages = [
 { title: 'Menu', url: '/menu', icon: 'cube' },
 { title: 'Logout', url: '/login', icon: 'exit' },
 ];
 public labels = [''];
 constructor() { }
 }