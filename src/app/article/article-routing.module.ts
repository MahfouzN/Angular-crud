import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailsComponent } from './details/details.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';

const routes: Routes = [
  { path: '', redirectTo: 'article/acceuil', pathMatch: 'full'},
  { path: 'article/acceuil', component: AcceuilComponent },
  { path: 'article/:id_article/details', component: DetailsComponent },
  { path: 'article/ajouter', component: AjouterComponent },
  { path: 'article/:id_article/modifier', component: ModifierComponent }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
