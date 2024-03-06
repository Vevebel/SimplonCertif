import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashPrincComponent } from './dash-princ/dash-princ.component';
// import { PriseRdvComponent } from '../prise-rdv/prise-rdv.component';
// import { DetailMedecinsComponent } from '../detail-medecins/detail-medecins.component';
// import { adminGuardGuard, authGuardGuard, patientGuardGuard } from '../guards/auth-guard.guard';
// import { DashAdminComponent } from './dash-admin/dash-admin.component';
// import { DashMedecinComponent } from './dash-medecin/dash-medecin.component';
// import { DashPatientComponent } from './dash-patient/dash-patient.component';
// import { GestionContenueComponent } from './gestion-contenue/gestion-contenue.component';
// import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
// import { HistoriqueDesRVComponent } from './historique-des-rv/historique-des-rv.component';
// import { GestionRoleComponent } from './gestion-role/gestion-role.component';
// import { GestionArticleComponent } from './gestion-article/gestion-article.component';
// import { ListePatientComponent } from './liste-patient/liste-patient.component';
// import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
// import { ListeRDVEnAttenteComponent } from './liste-rdven-attente/liste-rdven-attente.component';
// import { MesMedecinComponent } from './mes-medecin/mes-medecin.component';
// import { RendezVousPatientComponent } from './rendez-vous-patient/rendez-vous-patient.component';
// import { PlanningDuMedecinComponent } from './planning-du-medecin/planning-du-medecin.component';
// import { CalendrierPlannificationComponent } from './calendrier-plannification/calendrier-plannification.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // {
  //   path:'',
  //   component:DashPrincComponent,
  //   children:[
  //     {path : '',redirectTo : 'accueil', pathMatch :'full' ,},
  //     {path : 'priseRV', component : PriseRdvComponent,},
  //     {path : 'detailMed/:id' , component : DetailMedecinsComponent,},
  //     {path : 'dashboardAdmin', component : DashAdminComponent, canActivate:[adminGuardGuard]},
  //     {path : 'dashboardMed', component :DashMedecinComponent , canActivate:[authGuardGuard]},
  //     {path : 'dashboardPatient', component :DashPatientComponent ,canActivate:[patientGuardGuard]},
  //     {path : 'gestion-contenu', component :GestionContenueComponent ,},
  //     {path : 'gestion-user', component : GestionUtilisateurComponent,},
  //     {path : 'gestion-role', component : GestionRoleComponent,},
  //     {path : 'gestion-article', component : GestionArticleComponent ,},
  //     {path : 'gestion-patient', component : ListePatientComponent,},
  //     {path : 'consultation', component : ListeConsultationComponent,},
  //     {path : 'rendezVousAttente', component : ListeRDVEnAttenteComponent,},
  //     {path : 'historique', component :HistoriqueDesRVComponent ,},
  //     {path : 'MesMedicin', component : MesMedecinComponent,},
  //     {path : 'planning', component : PlanningDuMedecinComponent,},
  //     {path : 'consultationPatient/:id', component : RendezVousPatientComponent,},
  //     {path : 'priseConsultation/:id', component : CalendrierPlannificationComponent,},
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CommonModule],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
