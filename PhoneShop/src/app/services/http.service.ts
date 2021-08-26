import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000/products';
  constructor( private http : HttpClient) { }

  httpHeader = {
    headers :  new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProducts(): Observable <Product[]>{
    return this.http.get<Product[]>(this.url)
    .pipe(
      catchError(this.httpError)
    )
  }

  httpError(error : any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }  
}
