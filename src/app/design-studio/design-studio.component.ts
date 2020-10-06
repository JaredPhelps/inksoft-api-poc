import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductBase, ApiResponseType } from '../entities/entities';
import { Service } from '../services/service';

@Component({
  selector: 'design-studio',
  templateUrl: './design-studio.component.html',
  styleUrls: ['./design-studio.component.css']
})
export class DesignStudioComponent implements OnInit {
  product: ProductBase;
  productId: number;
  designId: number;
  updateCart: boolean;

  constructor(private service: Service, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('productId');
      this.designId = +params.get('designId');
      this.sessionToken = +params.get('sessionToken');
      this.updateCart = !!this.designId;
      this.service.getProduct(this.productId)
        .subscribe((response: ApiResponseType<ProductBase>) => {
          this.product = response.data[0];
        });
    });
  }
}
