import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'banners',
    loadChildren: () =>
      import('./banners/banners.module').then((x) => x.BannersModule),
  },
  {
    path: 'product-list',
    loadChildren: () =>
      import('./product/product.module').then((x) => x.ProductModule),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((x) => x.CounterModule),
  },
  {
    path: '',
    redirectTo: '/banners',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
