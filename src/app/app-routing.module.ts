import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HowToBuyComponent } from './how-to-buy/how-to-buy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"/body",pathMatch:'full'},
  {
    path: 'body',component:BodyComponent
  },
 {
  path:'how-to-buy',component:HowToBuyComponent 
 },
 {
  path:'**',component:PageNotFoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
