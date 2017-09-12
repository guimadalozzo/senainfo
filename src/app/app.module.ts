import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContatosPage } from '../pages/contatos/contatos';
import { PostagensPage } from '../pages/postagens/postagens';
import { MensagensPage } from '../pages/mensagens/mensagens';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ContatosPage,
    PostagensPage,
    MensagensPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContatosPage,
    PostagensPage,
    MensagensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
