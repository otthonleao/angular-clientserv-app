import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params : Observable<Params>= this.activatedRoute.params;
    params.subscribe(urlParams => {

      this.id = urlParams['id'];
      if(this.id){
        this.service
          .getClienteById(this.id)
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente()
        )
      }
    });
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service
        .atualizar(this.cliente)
        .subscribe(Response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente'];
        });
    } else {
      this.service.salvar(this.cliente).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.cliente = response; // Preenche os campos do form com o cliente salvo
          console.log(response);
        },
        (errorResponse) => {
          this.errors = errorResponse.error.errors;
          this.success = false;
          console.log(errorResponse.error.errors);
        }
      );
    }
  }
}
