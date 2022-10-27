import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  private apiUrlCapital:string='https://restcountries.com/v2/capital'

  constructor(private http:HttpClient) {

   }

  buscarPais(termino : string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url=`${this.apiUrlCapital}/${termino}`
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url=`${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }
  
}