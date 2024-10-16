import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { AuthConfig, AuthModule } from '@auth0/auth0-angular';
import { domain, clientId, callbackUri } from './auth.config';

const config: AuthConfig = {
  domain,
  clientId,
  authorizationParams: {
    redirect_uri: callbackUri,
  },
  // For using Auth0-Angular with Ionic on Android and iOS,
  // it's important to use refresh tokens without the falback
  useRefreshTokens: true,
  useRefreshTokensFallback: false,
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AuthModule.forRoot(config),
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {}
