import {retry, catchError} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Ordi } from '../models/ordi';

@Injectable({
  providedIn: 'root'
})
export class OrdiService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };
    
  listeMarques: string[];
  listeTypes: string[];
  listeCategories: string[];


  constructor(private http: HttpClient) {

    this.listeMarques = ['Dell', 'HP', 'Apple', 'Asus'];
    this.listeTypes = ['Portable', 'Fixe', 'Tablette hybride'];
    this.listeCategories = ['Gaming', 'Bureautique', 'Premier prix'];
   }

  //  Fonction en cas d'erreur http
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)
  }

  apiUrl = "http://localhost:3000/ordis";

  // on déclare un fonction qui return la liste de Ordix en tant qu'observable
  getAllOrdis() : Observable <Ordi[]> {
    return this.http.get<Ordi[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
  }
  

  //Fonction pour retrouver un Ordi par son nom
  getOrdiByID (id: number): Observable <Ordi> {
    return this.http.get<Ordi>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // fonction pour ajouter un Ordi au tableau listeOrdi
  addOrdi(Ordi: Ordi): Observable<Ordi> {
    return this.http.post<Ordi>(this.apiUrl ,Ordi).pipe(catchError(this.handleError));
   }

  //Fonction pour éditer un Ordi
  updateOrdi(Ordi: Ordi) {
    return this.http.put<Ordi>(this.apiUrl + '/' + Ordi.id, Ordi, this.httpOptions).pipe(catchError(this.handleError))
  }


  // Fonction pour supprimer un Ordi du tableau listeOrdi
  deleteOrdi(id: number): Observable <Ordi> {
    return this.http.delete<Ordi>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
  }

  


}
