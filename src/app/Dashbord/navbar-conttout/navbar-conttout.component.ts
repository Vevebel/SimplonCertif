import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { clouddebugger } from 'googleapis/build/src/apis/clouddebugger';
import { AuthentificationService } from 'src/app/servicesSRNRV/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-conttout',
  templateUrl: './navbar-conttout.component.html',
  styleUrls: ['./navbar-conttout.component.css']
})
export class NavbarConttoutComponent implements OnInit{

isAdmin: any;
isMedecin: any;
isPatient: any;

@Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar() {
    console.log("bar")
    this.toggleSidebarEvent.emit();
    
  }

// @Output() toggleSidebar = new EventEmitter<void>();

// onToggleSidebar() {
//   this.toggleSidebar.emit();
// }

// @Output() toggleSidebarEvent = new EventEmitter<void>();

// toggleSidebar() {
//   this.toggleSidebarEvent.emit();
// } 
  constructor(private authservice: AuthentificationService, private router: Router) { }
  userConnecte:any;

  // userConnecte:any;
  // user:any;
  // userImage: string= ""


  //   ngOnInit(): void {
  //     
  //     if(this.userConnecte.role =='admin'){
  //       this.ConnexionAdmin();
  //     }else if(this.userConnecte.rothis.userConnecte=JSON.parse(localStorage.getItem('userData') || "");
  //     console.log("L'utilisateur connecté",this.userConnecte)
  //     // console.log(this.userConnecte);
  //     console.log("L'image de l'utilisateur connecté",this.userConnecte.image);
  //     // console.log(this.userConnecte);le =='medecin'){
  //       this.ConnexionMedecin();
  //     }else if(this.userConnecte.role =='patient'){
  //       this.ConnexionPatient();
  //     }
  //   }
  ngOnInit(): void {

    this.userConnecte=JSON.parse(localStorage.getItem('userData') || "");
  //     console.log("L'utilisateur connecté",this.userConnecte)
  //     // console.log(this.userConnecte);
  //     console.log("L'image de l'utilisateur connecté",this.userConnecte.image);
  //     // console.log(this.userConnecte);
    // Initialisation des données...
  }

  deconnexion(): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, se déconnecter',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Suppression des informations de l'utilisateur connecté du localStorage
        localStorage.removeItem('userData');

        // Redirection vers la page d'accueil ou la page de connexion
        this.router.navigate(['/accueil']); // Modifiez cette ligne en fonction de votre structure de navigation
      }
    });
  }
}
