import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  constructor( private service: ClientesService ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.cliente = response; // Preenche os campos do form com o cliente salvo
        console.log(response);
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
      this.success = false;
      console.log(errorResponse.error.errors);
    });
  }
}
