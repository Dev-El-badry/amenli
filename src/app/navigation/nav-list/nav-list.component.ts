import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {
  display = false;
  constructor() { }

  ngOnInit() {
  }

  sidenavClosed() {
    console.log('weel done');
  }

  changeStatus() {
    this.display = true;
  }

  onClose() {
    this.display = false;
  }

}
