import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/modelSRS/Articles';
import { ArticleService } from 'src/app/servicesSRNRV/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-article',
  templateUrl: './gestion-article.component.html',
  styleUrls: ['./gestion-article.component.css']
})
export class GestionArticleComponent implements OnInit {
  // variables pour les noms des variables
  article: Article = new Article();

  titre: string = '';
  description: string = '';
  image: any = '';
  creatAt = '';
  updateAt = '';

  // liste article
  articles: any;
  listeArticle: any[] = [];
  currentPage: number = 1;
  pageNumbers: number[] = [];
  // totalPages: number;
  totalPages: number = 0;

  constructor(
    private articleService: ArticleService,
  ) {}

  getFile(event: any) {
    console.log('img', this.image);
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }

  ngOnInit(): void {
    this.listerDesArticles();
  }

  ajout(): void {
    let formData = new FormData();
    formData.append('titre', this.titre);
    formData.append('description', this.description);
    formData.append('image', this.image);

    this.articleService.ajoutArticle(formData).subscribe(
      (rep) => {
        console.log('réussi POOOOOOOO', rep);
        localStorage.setItem('userConnect', rep.token);
        this.listerDesArticles();
      },
      (error) => {
        console.error('erreur', error);
      }
    );

    this.verifierChamps('Félicitation!', 'Produit ajouté', 'success');

    this.viderChamps();
  }

  listerDesArticles() {
    this.articleService.getArticle().subscribe((response) => {
      console.log('listeArticle', response);
      this.articles = response.Articles;
      console.log("new data", this.articles);
      this.calculatePageNumbers();
    });
  }

  afficherDetailsArticle(article: any): void {
    this.articleService.getArticleDetails(article.id).subscribe((response: any) => {
      this.titre = response.titre;
      this.description = response.description;
      this.image = response.image;
    });
  }

  modifierarticle() {
    let formData = new FormData();
    formData.append('titre', this.titre,);
    formData.append('image', this.image,);
    formData.append('description', this.description,);
    this.articleService.updateArticle(this.id, formData).subscribe((response) => {
      console.log('modifArticle', response);
      this.listerDesArticles();
      this.viderChamps();
    });
  }

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

  supprimerArticle(id: number): void {
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

  calculatePageNumbers(): void {
    const totalPages = Math.ceil(this.articles.length / 3);
    this.pageNumbers = Array(totalPages).fill(0).map((_, index) => index + 1);
  }
  calculateTotalPages(): number {
    if (this.articles) {
      return Math.ceil(this.articles.length / 3); // 3 étant le nombre d'articles par page
    }
    return 0;
  }
  
  changePage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }

  viderChamps() {
    this.titre = '';
    this.description = '';
    this.image = '';
  }

  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }
}
