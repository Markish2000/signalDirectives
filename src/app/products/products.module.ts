// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Models
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ProductsModule {}
