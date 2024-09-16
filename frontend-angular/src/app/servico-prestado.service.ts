import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiBaseURL;

  constructor(private http: HttpClient) {}

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado> {
    // return this.http.post<ServicoPrestado>(`${this.apiURL}/api/servicos-prestados`, servicoPrestado);
    return this.http.post<ServicoPrestado>(`http://localhost:8080/api/servicos-prestados`, servicoPrestado);
  }

}
