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
    path: 'counterserv',
    loadChildren: () =>
      import('./counter-serv/counter-serv.module').then(
        (x) => x.CounterServModule
      ),
  },
  {
    path: 'students-msheet',
    loadChildren: () =>
      import('./students/students.module').then(
        (x) => x.StudentsModule
      ),
  },
  {
    path: 'div-creator',
    loadChildren: () =>
      import('./div-creator/dynamic-div.module').then(
        (x) => x.DynamicDivModule
      ),
  },
  {
    path: '',
    redirectTo: '/banners',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
