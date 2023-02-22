import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FormProductComponent } from './form-product/form-product.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
