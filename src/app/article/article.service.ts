import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiURL = "http://localhost:9000/";

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Article[]>{
    return this.httpClient.get<Article[]>( this.apiURL+"Article/getAll")
    .pipe(
      catchError(this.errorHandler)
    );

  }

  ajouter(article): Observable<Article> {
    return this.httpClient.post<Article>(this.apiURL+"Article/add",article)
    .pipe(
      catchError(this.errorHandler)
    );

  }

  modifier(id, article): Observable<Article> {
    return this.httpClient.put<Article>(this.apiURL+"Article/update/"+id,article)
    .pipe(
      catchError(this.errorHandler)
    );

  }
  find(id): Observable<Article> {
    return this.httpClient.get<Article>(this.apiURL + 'Article/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  supprimer(id){
    return this.httpClient.delete(this.apiURL+'Article/delete/'+id, {responseType: 'text'})
    .pipe(
      catchError(this.errorHandler)
    )

  }
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }


}
