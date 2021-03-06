import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import{ HomePage,
  MapaPage,
  MuseoPage,
  MuseoListPage,
  RestaurantePage,
  RestauranteListPage,
  SouvePage,
  SouveListPage,
  QmasvisitarPage,
  QmasvisitarListPage,
  HotelesPage,
  HotelesListPage,
  GaleriaPage,
  GaleriaListPage,
  ContactPage,
  TabsPage,
  RegistroPage,
  LogInPage,
  OpcionesPage,
  AgregarEventoPage,
  EditarEventoPage,
  EliminarEventoPage,
  AgregarItiPage,
  EditarItiPage,
  EliminarItiPage} from '../pages/index.paginas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    MuseoPage,
    MuseoListPage,
    RestaurantePage,
    RestauranteListPage,
    SouvePage,
    SouveListPage,
    QmasvisitarPage,
    QmasvisitarListPage,
    HotelesPage,
    HotelesListPage,
    GaleriaPage,
    GaleriaListPage,
    ContactPage,
    TabsPage,
    RegistroPage,
    LogInPage,
    OpcionesPage,
    AgregarEventoPage,
    EditarEventoPage,
    EliminarEventoPage,
    AgregarItiPage,
    EditarItiPage,
    EliminarItiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    MuseoPage,
    MuseoListPage,
    RestaurantePage,
    RestauranteListPage,
    SouvePage,
    SouveListPage,
    QmasvisitarPage,
    QmasvisitarListPage,
    HotelesPage,
    HotelesListPage,
    GaleriaPage,
    GaleriaListPage,
    ContactPage,
    TabsPage,
    RegistroPage,
    LogInPage,
    OpcionesPage,
    AgregarEventoPage,
    EditarEventoPage,
    EliminarEventoPage,
    AgregarItiPage,
    EditarItiPage,
    EliminarItiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
