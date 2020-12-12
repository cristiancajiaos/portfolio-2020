import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/basic-layout/footer/footer.component';
import { MainComponent } from './layouts/basic-layout/main/main.component';
import { HeaderComponent } from './layouts/basic-layout/header/header.component';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { UpIconComponent } from './layouts/basic-layout/up-icon/up-icon.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    UpIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: Window, useValue: window
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
