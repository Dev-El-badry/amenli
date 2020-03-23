import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { PlansComponent } from './compare-plans/plans/plans.component';
import { ComparePlansComponent } from './compare-plans/compare-plans.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChooseComponent } from './compare-plans/choose/choose.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InsuranceServicesComponent } from './insurance-services/insurance-services.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'insurance', component: InsuranceServicesComponent},
  {path: 'get_quote', component: QuotesComponent},
  {path: 'plan/choose/:company_name/:plan_selected/:brandId/:price', component: ComparePlansComponent},
  {path: 'checkout/payment/:company_name/:plan_selected/:brandId/:price', component: CheckoutComponent},
  {path: 'companies/choose/:brandId/:price', component: ChooseComponent},
  {path: 'plan/choose/:company_name/:plan_selected/:dob', component: ComparePlansComponent},
  {path: 'companies/choose/:dob', component: ChooseComponent},
  {path: 'checkout/payment/:company_name/:plan_selected/:dob', component: CheckoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
