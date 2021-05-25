import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'alta-duenio',
        loadChildren: () =>
          import('../alta-duenio/alta-duenio.module').then((m) => m.AltaDuenioPageModule),
      },            
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
