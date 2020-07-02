import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdiComponent } from './components/ordi/ordi.component';
import { OrdiDetailComponent } from './components/ordi-detail/ordi-detail.component';
import { AddOrdiComponent } from './components/add-ordi/add-ordi.component';
import { ToastrModule } from 'ngx-toastr';
import { EditOrdiComponent } from './components/edit-ordi/edit-ordi.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OrdiComponent,
    OrdiDetailComponent,
    AddOrdiComponent,
    EditOrdiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
