import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  { path: '',redirectTo:'product',pathMatch:'full'},
  { path:'product',component:ProductComponent },
  { path:'about',component:AboutComponent },
  { path:'contact',component:ContactComponent },
  { path:'product/:id',component:ProductdetailsComponent},
  { path:'**',component:PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
