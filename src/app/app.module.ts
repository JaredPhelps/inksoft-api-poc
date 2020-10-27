import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Service } from './services/service';
import { HttpClientModule } from '@angular/common/http';
import { DesignStudioComponent } from './design-studio/design-studio.component';
import { ScriptHackComponent } from './script-hack/script-hack.component';
import {CartComponent} from "./cart/cart.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId/:productStyleId/:designId/:sessionToken', component: DesignStudioComponent },
      { path: 'products/:productId', component: DesignStudioComponent },
      { path: 'cart/:sessionToken', component: CartComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    DesignStudioComponent,
    CartComponent,
    ScriptHackComponent
  ],
  providers: [
    Service,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/