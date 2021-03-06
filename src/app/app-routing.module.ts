import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path :'product',component:ServiceComponent},
  {path: 'product/detail/:id',component:ProductDetailComponent},
  {path: 'about',component:AboutComponent},
  {path: 'product/manager',component:ProductManagerComponent},
  {path: 'product/add',component:AddProductComponent},
  {path: '404',component:NotFoundComponent},
  {path: '**',redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
