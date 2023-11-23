import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//configuracion local de la app
import localEsHN from '@angular/common/locales/es-HN'
import localFrCA from '@angular/common/locales/fr-CA'
//es una funcion para registrar en angular el iduiona
import {registerLocaleData} from '@angular/common'

registerLocaleData(localEsHN);
registerLocaleData(localFrCA);

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
    //INYECCIÓN PARA decirle a angular que establesca el idioma por defecto
    {
      provide: LOCALE_ID, useValue:'es-HN'
    }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
