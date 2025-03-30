import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-create',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './categoria-create.component.html',
  styleUrl: './categoria-create.component.css'
})
export class CategoriaCreateComponent {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  };

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void { }

  create(): void {
    this.service.create(this.categoria).subscribe(resposta => {
      this.service.mensagem('Categoria criada com sucesso!');
      this.navegarParaCategoriaRead();
    }, error => {
      for (let i = 0; i < error.error.errors.length; i++) {
        this.service.mensagem(error.error.errors[i].message);
      }
    });
  }

  navegarParaCategoriaRead(): void {
    this.router.navigate(["categorias"]);
  }

}
