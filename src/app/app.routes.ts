import { RouterModule, Routes } from '@angular/router';
import { ProductAboutComponent } from './product-about/product-about.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { ProductNaturaComponent } from './product-natura/product-natura.component';

@NgModule({
    declarations:[
        AppComponent,
        CartComponent,
        ProductAboutComponent,
        ProductListComponent,
        ProductNaturaComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule,
    ],
    providers:[],
    bootstrap:[AppComponent],

})
export class AppModule{}
export const routes: Routes = [];
function forRoot(appRoutes: any) {
    throw new Error('Function not implemented.');
}

