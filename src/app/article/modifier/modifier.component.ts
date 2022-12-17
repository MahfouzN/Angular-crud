import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  id!: number;
  article!: Article;
  form!: FormGroup;

  constructor(public articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

    /**
   * Write code on Method
   *
   * @return response()
   */

    ngOnInit(): void {

      this.id = this.route.snapshot.params['id_article'];
      this.articleService.find(this.id).subscribe((data: Article)=>{
        this.article = data;
      });

      this.form = new FormGroup({
        designation: new FormControl('', [Validators.required]),
        prixUnitaire: new FormControl('', Validators.required),
        quantite: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
      });
    }
     /**
   * Write code on Method
   *
   * @return response()
   */

    get f(){
      return this.form.controls;
    }
/**
   * Write code on Method
   *
   * @return response()
   */

    submit(){
      console.log(this.form.value);
      this.articleService.modifier(this.id, this.form.value).subscribe((res:any) => {
           console.log('Mise à jour reussit');
           this.router.navigateByUrl('article/acceuil');
      })
    }

}
