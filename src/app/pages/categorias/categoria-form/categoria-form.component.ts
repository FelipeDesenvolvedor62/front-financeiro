import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';

import { switchMap } from 'rxjs';

//import toastr from 'toastr';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit, AfterContentChecked {

  currentAction: string = '';
  categoriaForm?: FormGroup;
  pageTitle: string = '';
  serverErrorMensagens: string[] = [];
  submittingForm: boolean = false;
  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngAfterContentChecked() {
    this.setPageTitle()
  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategoriaForm();
    this.loadCategoria();
  }

  setCurrentAction() {
    if (this.route.snapshot.url[0].path == 'new')
      this.currentAction = 'new'
    else
      this.currentAction = 'edit'
  }

  buildCategoriaForm() {
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      descricao: [null]
    })
  }

  loadCategoria() {
    if (this.currentAction == 'edit') {

      this.route.paramMap.pipe(
        switchMap(params => this.categoriaService.getById(Number(params.get("id"))))
      ).subscribe(
        (categoria) => {
          this.categoria = categoria
          this.categoriaForm?.patchValue(categoria)
        },
        (erro) => alert('Ocorreu um erro na categoria fomr'))
    }
  }

  private setPageTitle(){
    if(this.currentAction == 'new')
      this.pageTitle = 'Cadastro de formulário'
    else
      this.pageTitle = 'Edição de formulário'
  }
}
