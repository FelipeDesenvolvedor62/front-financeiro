import { AfterContentChecked, Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';

import { switchMap } from 'rxjs';

//import  toastr from 'toastr';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit, AfterContentChecked {

  currentAction: string = '';
  categoriaForm: FormGroup | undefined;
  pageTitle: string = '';
  serverErrorMensagens: string[] = [];
  submittingForm: boolean = false;
  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private  route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngAfterContentChecked(){

  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategoriaForm();
    this.loadCategoria();
  }

  setCurrentAction(){

  }

  buildCategoriaForm(){

  }

  loadCategoria(){

  }
}
