import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FractionComponent } from './fraction/fraction.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: FractionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
