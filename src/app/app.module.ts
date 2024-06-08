import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductNaturaComponent } from './product-natura/product-natura.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductAboutComponent,
        ProductNaturaComponent,
        
        CartComponent
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ProductListComponent
    ]
})
export class AppModule { }
