import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-categoria-read',
  imports: [MatTableModule],
  templateUrl: './categoria-read.component.html',
  styleUrl: './categoria-read.component.css'
})
export class CategoriaReadComponent {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
}
