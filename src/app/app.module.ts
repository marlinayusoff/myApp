import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddStudentPage } from '../pages/student/addStudent';
import { ViewStudentPage } from '../pages/student/viewStudent';
import { ViewAttendancePage } from '../pages/attendance/viewAttendance';
import { ViewGenerateCodePage } from '../pages/student/generate-qr';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { AuthProvider } from '../providers/auth/auth';

import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AddStudentPage,
    ViewStudentPage,
    ViewAttendancePage,   
    ViewGenerateCodePage, 
    LoginPage,
    TabsPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AddStudentPage,
    ViewStudentPage,
    ViewAttendancePage,
    ViewGenerateCodePage,
    LoginPage,
    TabsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    AuthProvider,
  ]
})
export class AppModule {}