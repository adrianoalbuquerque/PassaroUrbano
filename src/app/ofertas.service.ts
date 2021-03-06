import { Oferta } from './shared/oferta.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()
export class OfertasService{
    
    constructor(private http: HttpClient){
    }    

    public getOfertas():Promise<Oferta[]>{
        //efetuar uma requisição http
        return this.http.get(`${URL_API}/ofertas`).toPromise()
        .then((resposta:any) => resposta)  
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`).toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`).toPromise()
        .then((resposta: any) => {
            console.log(resposta[0])
            return resposta [0]
        })
    }

    public getComoUsarOfertasPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`).toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

    public getOndeFicaOfertasPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`).toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .retry(10)
        .map((resposta: any) => resposta);
    }
}