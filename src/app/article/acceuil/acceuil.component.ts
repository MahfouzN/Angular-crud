import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  liste_articles: Article[] = [];

  constructor(public articleService: ArticleService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */

  ngOnInit(): void {
    this.articleService.getAll().subscribe((data: Article[])=>{
      this.liste_articles = data;

    })
  }
   /**
   * Write code on Method
   *
   * @return response()
   */
  supprimerArticle(id:number){
    this.articleService.supprimer(id).subscribe(res=> {
         this. liste_articles = this. liste_articles.filter(item => item.id !== id);

    })
  }

}
