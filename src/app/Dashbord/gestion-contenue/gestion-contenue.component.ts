import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/modelSRS/Articles'; // Vérifiez le chemin d'importation
import { ArticleService } from 'src/app/servicesSRNRV/article.service'; // Vérifiez le chemin d'importation
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-contenue',
  templateUrl: './gestion-contenue.component.html',
  styleUrls: ['./gestion-contenue.component.css']
})
export class GestionContenueComponent implements OnInit {
  // articles: any[] = [];
  filterValue: string = '';
  originalarticles: any[] = [];
  errorMessage: string = "Cet article n'existe pas.";
  location: any;
  // titre: any;
  // description: any;
  // image: any;
    id: number = 0;
  currentPage: number = 1;
  // variables pour les noms des variables
  article: Article = new Article();

  titre: string = '';
  description: string = '';
  image: any = '';
  creatAt = '';
  updateAt = '';

  // liste article
  articles:any;
  listeArticle: any[]=[];
  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listerDesArticlesPublie();
    this.pageNumbers = Array(this.totalPages).fill(0).map((x, i) => i + 1);

  }

  listerDesArticlesPublie(): void {
    this.articleService.getAllArticles().subscribe(articles => {
      this.articles = articles.articles;
      this.originalarticles = articles.articles; // Stockez les articles originaux pour la recherche
    });
  }

  afficherDetailsArticle(article: any): void {
    this.articleService.getArticleDetails(article.id).subscribe((response: any) => {
      this.titre = response.titre;
      this.description = response.description;
      this.image = response.image;
    });
  }

  onSearch(): void {
    if (this.filterValue.trim() === '') {
      this.articles = [...this.originalarticles];
    } else {
      this.articles = this.originalarticles.filter(article =>
        article.titre.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    }
    if (this.articles.length === 0) {
      this.errorMessage = "Cet article n'existe pas.";
    } else {
      this.errorMessage = '';
    }
  }

  // changePage(pageNumber: number): void {
  //   this.currentPage = pageNumber;
  // }
  pageNumbers: number[] = [];
  get pagedArticles(): Article[] {
    const startIndex = (this.currentPage - 1) * 3;
    const endIndex = Math.min(startIndex + 3, this.articles.length);
    return this.articles.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.articles.length / 3);
  }
  changePage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }
  
  // supprimerArticle(id:number): void{

  //   Swal.fire({
  //     title: "Etes-vous sur???",
  //     text: "Vous allez supprimer le article",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#1A6060",
  //     cancelButtonColor: "#2FA7A7",
  //     confirmButtonText: "Oui, je supprime!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.articleService.deleteArticle(id).subscribe((response) => {
  //         console.log('suparticle', response);
  //       });
  //     }
  //   });
  // }
  supprimerArticle(id: string): void {
    const articleId = parseInt(id); // Convertir en nombre
    Swal.fire({
        title: "Etes-vous sûr???",
        text: "Vous allez supprimer l'article",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1A6060",
        cancelButtonColor: "#2FA7A7",
        confirmButtonText: "Oui, je supprime!"
    }).then((result) => {
        if (result.isConfirmed) {
            this.articleService.deleteArticle(articleId).subscribe((response) => {
                console.log('suparticle', response);
            });
        }
    });
}

}