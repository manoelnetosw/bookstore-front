import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-read',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './categoria-read.component.html',
  styleUrl: './categoria-read.component.css'
})

export class CategoriaReadComponent {

  categorias: Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    });
  }
}
