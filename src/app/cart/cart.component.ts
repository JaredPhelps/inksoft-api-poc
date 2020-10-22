import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductBase, ApiResponseType, ShoppingCartPackage} from '../entities/entities';
import { Service } from '../services/service';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    sessionToken: string;
    cart: ShoppingCartPackage;

    constructor(private service: Service, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.sessionToken = params.get('sessionToken');
            this.service.getCartPackage(this.sessionToken)
                .subscribe((response: ApiResponseType<ShoppingCartPackage>) => {
                    this.cart = response.data;
                });
        });
    }
}
