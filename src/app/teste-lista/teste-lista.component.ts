import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Teste } from './../shared/teste'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teste-lista',
  templateUrl: './teste-lista.component.html',
  styleUrls: ['./teste-lista.component.css']
})
export class TesteListaComponent implements OnInit {
  p: number = 1;
  Teste: Teste[];
  hideWhenNoRegister: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  constructor(
    public crudApi: CrudService,
    public toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.dataState();
    let s = this.crudApi.GetTesteList(); 
    s.snapshotChanges().subscribe(data => {
      this.Teste = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Teste.push(a as Teste);
      })
    })
  }
  dataState() {     
    this.crudApi.GetTesteList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoRegister = false;
        this.noData = true;
      } else {
        this.hideWhenNoRegister = true;
        this.noData = false;
      }
    })
  }
  deleteTeste(teste) {
    if (window.confirm('Tem certeza que deseja excluir este registro ?')) { 
      this.crudApi.DeleteTeste(teste.$key)
      this.toastr.success(teste.nome + ' Deletado com sucesso!');
    }
  }
}
