import { Injectable } from '@angular/core';
import { Teste } from '../shared/teste';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  testesRef: AngularFireList<any>;
  testeRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  // Criando um registro teste
  AddTeste(teste: Teste) {
    this.testesRef.push({
      nome: teste.nome,
      sobrenome: teste.sobrenome,
      email: teste.email,
      telefone: teste.telefone,
      linkedin: teste.linkedin,
      github: teste.github,
    });
  }
  // Buscando um único registro
  GetTeste(id: string) {
    this.testeRef = this.db.object('teste-lista/' + id);
    return this.testeRef;
  }
  // Buscando lista de registros de teste
  GetTesteList() {
    this.testesRef = this.db.list('testes-lista');
    return this.testesRef;
  }
  // Alterando um registro de Teste
  UpdateTeste(teste: Teste) {
    this.testeRef.update({
      nome: teste.nome,
      sobrenome: teste.sobrenome,
      email: teste.email,
      telefone: teste.telefone,
      linkedin: teste.linkedin,
      github: teste.github,
    });
  }
  // Deletando um registro teste
  DeleteTeste(id: string) {
    this.testeRef = this.db.object('teste-lista/' + id);
    this.testeRef.remove();
  }
}
