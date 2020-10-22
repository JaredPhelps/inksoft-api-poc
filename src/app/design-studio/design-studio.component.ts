import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductBase, ApiResponseType } from '../entities/entities';
import { Service } from '../services/service';
import {environment} from "../../environments/environment";

@Component({
  selector: 'design-studio',
  templateUrl: './design-studio.component.html',
  styleUrls: ['./design-studio.component.css']
})
export class DesignStudioComponent implements OnInit {
  product: ProductBase;
  productId: number;
  productStyleId: number;
  designId: number;
  updateCart: boolean;
  sessionToken: string;
  apiDomain: string;

  constructor(private service: Service, private route: ActivatedRoute) {
    this.apiDomain = environment.apiDomain;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('productId');
      this.productStyleId = +params.get('productStyleId');
      this.designId = +params.get('designId');
      this.sessionToken = this.service.sessionToken;
      this.updateCart = !!this.designId;
      this.service.getProduct(this.productId)
        .subscribe((response: ApiResponseType<ProductBase>) => {
          this.product = response.data[0];
        });
    });
  }
}
