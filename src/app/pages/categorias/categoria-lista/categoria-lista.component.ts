import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.scss']
})
export class CategoriaListaComponent implements OnInit {

  alerta(texto : string){
    alert(texto)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
