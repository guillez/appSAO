import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaneshistorialPage } from './planeshistorial.page';

const routes: Routes = [
  {
    path: '',
    component: PlaneshistorialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaneshistorialPage]
})
export class PlaneshistorialPageModule {}
