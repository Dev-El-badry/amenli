import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { PlansComponent } from './compare-plans/plans/plans.component';
import { ComparePlansComponent } from './compare-plans/compare-plans.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChooseComponent } from './compare-plans/choose/choose.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'insurance', component: QuotesComponent},
  {path: 'plan/choose/:company_name/:plan_selected/:brandId/:price', component: ComparePlansComponent},
  {path: 'checkout/payment/:company_name/:plan_selected/:brandId/:price', component: CheckoutComponent},
  {path: 'companies/choose/:brandId/:price', component: ChooseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
