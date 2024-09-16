import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiBaseURL + '/api/clientes';

  constructor( private http: HttpClient ) {
  }

  salvar(cliente: Cliente) : Observable<Cliente> {
    // return this.http.post<Cliente>(`http://localhost:8080/api/clientes`, cliente);
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);

  }

  atualizar(cliente: Cliente) : Observable<Cliente> {
    // return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  // getClientes() : Cliente[] {
  //   let cliente = new Cliente();
  //   cliente.id = 1;
  //   cliente.nome = 'Otthon Leão';
  //   cliente.cpf = '12345678900';
  //   cliente.dataCadastro = '18/04/2024';
  //   return [cliente];
  // }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  getClienteById(id:number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }
}
