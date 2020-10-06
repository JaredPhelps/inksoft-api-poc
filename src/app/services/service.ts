import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from 'rxjs/operators';
import { ProductBase, ApiResponseType, ApiResponse } from "../entities/entities";
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable()
export class Service {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ApiResponseType<ProductBase[]>> {
      return this.get('https://qa.inksoft.com/DS509063609/Api2/GetProductBaseList?IncludePrices=true&IncludeSizes=true&Predecorated=false&format=JSONCamelCase')
      .pipe();
  }

  getProduct(productId: number): Observable<ApiResponseType<ProductBase>> {
      return this.get('https://qa.inksoft.com/DS509063609/Api2/GetProductBaseList?IncludePrices=true&IncludeSizes=true&Predecorated=false&format=JSONCamelCase&ProductIds=[' + productId + ']')
      .pipe();
  }

  get(url: string): Observable<ApiResponse> {
      return this.http.get(url)
      .pipe(
        map((res: ApiResponse) => res),
        catchError(this.handleError)
      );;
  }

  protected handleError(error: Response): Observable<never> {
    return observableThrowError(error);
  }
}