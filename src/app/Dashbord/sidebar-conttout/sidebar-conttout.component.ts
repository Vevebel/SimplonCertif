import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/servicesSRNRV/authentification.service';

@Component({
  selector: 'app-sidebar-conttout',
  templateUrl: './sidebar-conttout.component.html',
  styleUrls: ['./sidebar-conttout.component.css']
})
export class SidebarConttoutComponent  implements OnInit {
[x: string]: any;

  // @Output() toggle = new EventEmitter<void>();
  // homeCollapsed: boolean = true;
  // dashboardCollapsed: boolean = true;
  // Input() sidebarOpen: boolean = false; 
// sidebarOpen: any;
  
  // toggleCollapse(panel: string) {
  //   if (panel === 'home') {
  //     this.dashboardCollapsed = true; // Fermer le panneau Dashboard si ouvert
  //     this.homeCollapsed = !this.homeCollapsed; // Inverser l'état du panneau Home
  //   } else if (panel === 'dashboard') {
  //     this.homeCollapsed = true; // Fermer le panneau Home si ouvert
  //     this.dashboardCollapsed = !this.dashboardCollapsed; // Inverser l'état du panneau Dashboard
  //   }
  // }

  constructor(private authservice: AuthentificationService, private router: Router) { }

 // Inscription du patient ou du medecin
  // Les variables

  isPatient:boolean = false;
  isMedecin:boolean = false;
  isAdmin:boolean=false;
  // idLastUser: number | undefined;
  tabUsers: any;

  isDashboardActive: boolean = false;


  // Les fonctions
  ConnexionMedecin(){
    this.isPatient = false;
    this.isMedecin = true;
    this.isAdmin=false;
  }

  ConnexionPatient(){
    this.isPatient = true;
    this.isMedecin = false;
    this.isAdmin=false;
  }
  ConnexionAdmin(){
    this.isPatient = false;
    this.isMedecin = false;
    this.isAdmin=true;
  }
  userConnecte:any;
  user:any;
  userImage: string= ""


    ngOnInit(): void {
      this.userConnecte=JSON.parse(localStorage.getItem('userData') || "");
      console.log("L'utilisateur connecté",this.userConnecte)
      // console.log(this.userConnecte);
      console.log("L'image de l'utilisateur connecté",this.userConnecte.image);
      // console.log(this.userConnecte);
      if(this.userConnecte.role =='admin'){
        this.ConnexionAdmin();
      }else if(this.userConnecte.role =='medecin'){
        this.ConnexionMedecin();
      }else if(this.userConnecte.role =='patient'){
        this.ConnexionPatient();
      }
    }

}
