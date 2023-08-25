import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'all-products',redirectTo:'./products',pathMatch:'full'},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path:'**',component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
