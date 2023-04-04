import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingsComponent } from './product-list/product-listings.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      {path: '', component: ProductListingsComponent},
      {path: ':productId', component: ProductDetailComponent}
    ]
  },
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListingsComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
