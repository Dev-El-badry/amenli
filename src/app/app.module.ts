import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './primeNG.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateConfigModule } from './translate-config.module';



import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { NavListComponent } from './navigation/nav-list/nav-list.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CarInsuranceComponent } from './quotes/car-insurance/car-insurance.component';
import { MedicalInsuranceComponent } from './quotes/medical-insurance/medical-insurance.component';
import { LifeInsuranceComponent } from './quotes/life-insurance/life-insurance.component';
import { CollbrationsComponent } from './collbrations/collbrations.component';
import { CollbrationComponent } from './collbrations/collbration/collbration.component';
import { StepperComponent } from './stepper/stepper.component';
import { ComparePlansComponent } from './compare-plans/compare-plans.component';
import { CompareModalComponent } from './compare-plans/compare-modal/compare-modal.component';
import { PlansComponent } from './compare-plans/plans/plans.component';
import { BestPriceComponent } from './compare-plans/best-price/best-price.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentMethodComponent } from './checkout/payment-method/payment-method.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { NavLinksComponent } from './navigation/nav-links/nav-links.component';

//services
import { QuotesService } from './quotes/shared/quotes.service';
import { CompareModelService } from './compare-plans/shared/compare-model.service';
import { CheckoutService } from './checkout/shared/checkout.service';
import {SharedService} from './shared/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { ChooseComponent } from './compare-plans/choose/choose.component';
import { OdooService } from './shared/odoo.service';
import { UIService } from './shared/ui.service';
import { CollbrationsService } from './collbrations/collbrations.service';
import {MessageService} from 'primeng/api';
import { TranslateConfigService } from './shared/translate-config.service';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    NavbarComponent,
    NavListComponent,
    QuotesComponent,
    CarInsuranceComponent,
    MedicalInsuranceComponent,
    LifeInsuranceComponent,
    CollbrationsComponent,
    CollbrationComponent,
    StepperComponent,
    ComparePlansComponent,
    CompareModalComponent,
    PlansComponent,
    BestPriceComponent,
    CheckoutComponent,
    PaymentMethodComponent,
    OrderSummaryComponent,
    ChooseComponent,
    NavLinksComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateConfigModule
  ],
  providers: [QuotesService, CompareModelService, CheckoutService, SharedService, OdooService, CollbrationsService, UIService, MessageService, TranslateConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
