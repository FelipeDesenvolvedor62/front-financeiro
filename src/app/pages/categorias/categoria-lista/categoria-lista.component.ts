import { Component, OnInit } from '@angular/core';
import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.scss']
})
export class CategoriaListaComponent implements OnInit {

  categorias: Categoria[] = [];
  reqResp = (items: any) => this.categorias = items;

  reqErro = (erro: any) => alert(erro)
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(this.reqResp, this.reqErro)
  }

  delete(categoria: Categoria) {
    this.categoriaService.delete(categoria.id || 0).subscribe(
      () => this.categorias = this.categorias.filter((item: Categoria) => categoria != item),
      this.reqErro
    )
  }
}
