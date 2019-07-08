import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FractionComponent } from './fraction.component';

const routes: Routes = [
    { path: 'welcome', component: FractionComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class FractionRoutingModule {}
