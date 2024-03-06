import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/servicesSRNRV/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dash-medecin',
  templateUrl: './dash-medecin.component.html',
  styleUrls: ['./dash-medecin.component.css']
})
export class DashMedecinComponent  implements OnInit{
  articles: any[] = [];
  // article: Article = new Article();

  titre: string = '';
  description: string = '';
  image: any = '';
  creatAt = '';
  updateAt = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    // this.getArticle();
    // let user = JSON.parse(localStorage.getItem("token") || "")
    // console.log(user);
    // console.log(JSON.parse(localStorage.getItem("token") ?? '{}').access_token )
    // this.filteredProduit=this.tabListProduit
    // this.modifierArticle();
    // this.ajout();
    this.listerDesArticles();
  }
  getFile(event: any) {
    console.log('img', this.image);
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }
 // methode pour supprimer




  /** fonction pour lister les produits */



  // lister  produits
  listerDesArticles() {
    // console.log(this.tabListProduit);
    this.articleService.getArticle().subscribe((response) => {
      console.log('listeArticle',response );
      this.articles= response.Articles;
      console.log("new data",this.articles);
    });
  }


  supprimerArticle(id:number): void{

    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez supprimer le article",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1A6060",
      cancelButtonColor: "#2FA7A7",
      confirmButtonText: "Oui, je supprime!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleService.deleteArticle(id).subscribe((response) => {
          console.log('suparticle', response);
        });
      }
    });
}


afficherDetailsArticle(article: any): void {
  this.articleService.getArticleDetails(article.id).subscribe((response: any) => {
    this.titre = response.titre;
    this.description = response.description;
    this.image = response.image;

    // Ouvrir la fenêtre modale des détails de l'article
    // $('#exampleModal-details').modal('show');
  });
}



modifierarticle() {
  let formData = new FormData();
    formData.append('titre', this.titre,);
    formData.append('image', this.image,);
    console.log('image', this.image);

    formData.append('description', this.description,);
  this.articleService.updateArticle(this.id, formData).subscribe((response) => {
      console.log('modifArticle', response);
      this.listerDesArticles();
      // this.viderChamps();

    });
    // this.ngOnInit();
    // this.listerDesArticles();
    // this.articles;

}
// declare id
id: number = 0;
chargerInfosArticle(article: any) {
  console.log(article);
  this.id = article.id;
  console.warn('lid de vv', this.id);
  this.titre = article.titre;
  this.description = article.description;
  this.image = article.image;
  console.log('changer', this.chargerInfosArticle);
}

}