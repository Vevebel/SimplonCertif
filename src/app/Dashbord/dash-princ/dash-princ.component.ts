import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-princ',
  templateUrl: './dash-princ.component.html',
  styleUrls: ['./dash-princ.component.css']
})
export class DashPrincComponent {
  // sidebarOpen: boolean = true;

  // toggleSidebar() {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  isSidebarVisible: boolean = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
