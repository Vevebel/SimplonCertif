import { Component } from '@angular/core';
import { Users } from 'src/app/modelSRS/users';
import { UsersService } from 'src/app/servicesSRNRV/users.service';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent {

  

  constructor(private userService: UsersService) { }

  dtOptions: DataTables.Settings = {};
  Users: Users[] = [];

  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };
    this.listerDesUtilisateurs();
  }

  listerDesUtilisateurs() {
    this.userService.getUsers().subscribe((response) => {
      // this.Users = response.users;
      this.Users = response.users.filter((Users: { role: string; }) => Users.role === 'medecin' || Users.role === 'patient');

    });
  }

 

  // getUtilisateursRecents() {
  //   this.userService.getUsers().subscribe((response) => {
  //     // Limitez la liste à 10 utilisateurs
  //     this.usersRecents = response.users.slice(0, 10);
  //   });
  // }
  
  // constructor(private userService: UsersService) { }

  // dtOptions: DataTables.Settings = {};
  // Users: Users[] = [];

  // ngOnInit(): void {
  //   this.dtOptions = {
  //     searching: true,
  //     lengthChange: false,
  //     paging: true,
  //     info: false,
  //     language: {
  //       url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
  //     }
  //   };
  //   this.listerDesUtilisateurs();
  // }

  // listerDesUtilisateurs() {
  //   this.userService.getUsers().subscribe((response) => {
  //     // this.Users = response.users;
  //     this.Users = response.users.filter((Users: { role: string; }) => Users.role === 'medecin' || Users.role === 'patient');
  //     this.Users = response.users.slice(0, 10);

  //   });
  // }
}
