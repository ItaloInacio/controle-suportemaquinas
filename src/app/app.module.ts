import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

export const firebaseconfig ={
  apiKey: "AIzaSyBmaKkySiosCUMaNisO3dVzl0vHLqAuKSU",
  authDomain: "suportemaquinas.firebaseapp.com",
  projectId: "suportemaquinas",
  storageBucket: "suportemaquinas.appspot.com",
  messagingSenderId: "52594817065",
  appId: "1:52594817065:web:29295832520fb5eaaf0438"

}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
