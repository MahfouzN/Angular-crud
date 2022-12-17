import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  form!: FormGroup;

  constructor( public articleService: ArticleService,private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      designation: new FormControl('', [Validators.required]),
      prixUnitaire: new FormControl('', Validators.required),
      quantite: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.articleService.ajouter(this.form.value).subscribe((res:any) => {
         console.log('Article ajouté avec succcés');
         this.router.navigateByUrl('article/acceuil');
    })
  }

}
