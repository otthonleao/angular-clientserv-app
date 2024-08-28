import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) {
    this.http.get('http://localhost:8080/clientes')
  }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);

  }

  getCliente() : Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano de Tal vindo do Service';
    cliente.cpf = '888.888.888-88';
    return cliente;
  }
}
