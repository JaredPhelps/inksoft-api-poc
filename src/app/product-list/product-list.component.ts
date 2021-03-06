import { Component, OnInit } from '@angular/core';
import { ProductBase, ApiResponseType } from '../entities/entities';
import { Service } from '../services/service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductBase[];
  public sessionToken: string;

  constructor(private service: Service) {
    this.sessionToken = service.sessionToken;
  }

  ngOnInit() {
    this.service.getProducts()
    .subscribe((response: ApiResponseType<ProductBase[]>) => {
      this.products = response.data;
    });
  }

  setSessionToken(newToken: string) {
    this.service.sessionToken = newToken;
  }

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/