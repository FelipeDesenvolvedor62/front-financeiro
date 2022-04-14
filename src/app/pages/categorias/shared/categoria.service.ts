import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiPath: string = "api/categorias"

  // getAll(): Observable<string> {
  //   return this.http.get(this.apiPath).pipe();
  // }
  constructor(private http: HttpClient) { }
}
