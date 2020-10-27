import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, map} from 'rxjs/operators';
import {ProductBase, ApiResponseType, ApiResponse, ShoppingCartPackage} from "../entities/entities";
import {throwError as observableThrowError, Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class Service {
    // In a real-life app you'd get this from a call to GetOrCreateSessionWithApiKey on the server-side.
    public sessionToken: string = 'D1A70F7C-9F69-4535-8E56-5D0314BEA0DF';

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<ApiResponseType<ProductBase[]>> {
        return this.get('https://' + environment.apiDomain + '/DS509063609/Api2/GetProductBaseList?IncludePrices=true&IncludeSizes=true&Predecorated=false&format=JSONCamelCase')
            .pipe();
    }

    getProduct(productId: number): Observable<ApiResponseType<ProductBase>> {
        return this.get('https://' + environment.apiDomain + '/DS509063609/Api2/GetProductBaseList?IncludePrices=true&IncludeSizes=true&Predecorated=false&format=JSONCamelCase&ProductIds=[' + productId + ']')
            .pipe();
    }

    getCartPackage(sessionToken: string): Observable<ApiResponseType<ShoppingCartPackage>> {
        return this.get('https://' + environment.apiDomain + '/DS509063609/Api2/GetCartPackage?SessionToken=' + sessionToken + '&format=JSONCamelCase')
            .pipe();
    }


    get(url: string): Observable<ApiResponse> {
        return this.http.get(url)
            .pipe(
                map((res: ApiResponse) => res),
                catchError(this.handleError)
            );
        ;
    }

    protected handleError(error: Response): Observable<never> {
        return observableThrowError(error);
    }
}