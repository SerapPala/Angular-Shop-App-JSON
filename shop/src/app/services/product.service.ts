import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';

  getProducts(_categoryId: any): Observable<Product[]> {
    let newPath = this.path;
    if (_categoryId) {
      newPath = newPath + '?categoryId=' + _categoryId;
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product[]> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Autorization':'Token'
      })
    }
    return this.http.post<Product[]>(this.path,product,httpOptions).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu' + error.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage);
  }
}
