import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-teste',
  templateUrl: './add-teste.component.html',
  styleUrls: ['./add-teste.component.css']
})
export class AddTesteComponent implements OnInit {
  public testeForm: FormGroup;
  constructor( 
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ){ }
  ngOnInit(): void {
    this.crudApi.GetTesteList();
    this.testForm();
  }
  testForm() {
    this.testeForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      linkedin: [''],
      github: [''],
    });
  }
  get nome() {
    return this.testeForm.get('nome');
  }
  get sobrenome() {
    return this.testeForm.get('sobrenome');
  }
  get email() {
    return this.testeForm.get('email');
  }
  get telefone() {
    return this.testeForm.get('telefone');
  }
  get linkedin() {
    return this.testeForm.get('linkedin');
  }
  get github() {
    return this.testeForm.get('github');
  }
  ResetForm() {
    this.testeForm.reset();
  }
  submitTesteData() {
    this.crudApi.AddTeste(this.testeForm.value);
    this.toastr.success(
      this.testeForm.controls['nome'].value + ' Adicionado com sucesso!'
    );
    this.ResetForm();
  }
}

