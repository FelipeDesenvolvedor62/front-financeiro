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

  constructor() { }

  ngAfterContentChecked(){

  }

  ngOnInit(): void {
  }

}
