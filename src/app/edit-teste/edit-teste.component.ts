import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-teste',
  templateUrl: './edit-teste.component.html',
  styleUrls: ['./edit-teste.component.css']
})
export class EditTesteComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
) { }

  ngOnInit(): void {
    this.updateTesteData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetTeste(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }
  get nome() {
    return this.editForm.get('nome');
  }
  get sobrenome() {
    return this.editForm.get('sobrenome');
  }
  get email() {
    return this.editForm.get('email');
  }
  get telefone() {
    return this.editForm.get('telefone');
  }
  updateTesteData() {
    this.editForm = this.fb.group({
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
  goBack() {
    this.location.back();
  }
  updateForm() {
    this.crudApi.UpdateTeste(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['nome'].value + ' Editado com sucesso'
    );
    this.router.navigate(['view-testes']);
  }
}
