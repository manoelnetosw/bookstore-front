import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './categoria-read.component.html',
  styleUrl: './categoria-read.component.css'
})

export class CategoriaReadComponent {

  categorias: Categoria[] = [];

  displayedColumns: string[] = ["id", "nome", "descricao", "livros", "acoes"];

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    });
  }

  navegarParaCategoriaCreate(): void {
    this.router.navigate(["categoria/create"]);
  }

}
