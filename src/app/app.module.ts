import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppMaterialModule } from './app-material.module';
import { FractionComponent } from './fraction/fraction.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FractionRoutingModule } from './fraction/fraction-routing.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [
    AppComponent,
    FractionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FractionRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
