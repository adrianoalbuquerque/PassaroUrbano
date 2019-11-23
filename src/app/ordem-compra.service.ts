import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { URL_API } from './app.api';
import { Pedido } from './shared/pedido.model';

const PEDIDO_URL = URL_API + '/pedidos';
 
@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor(private http: HttpClient) { }

  efetivarCompra(pedido: Pedido): Observable<any> {
    return this.http.post(PEDIDO_URL, pedido);
  }
}
