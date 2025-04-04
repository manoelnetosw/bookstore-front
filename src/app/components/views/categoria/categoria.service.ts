import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { environment } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}categorias`;
    return this.http.get<Categoria[]>(url);
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  mensagem(msg: String): void {
    this._snack.open(`${msg}`, 'OK', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

}