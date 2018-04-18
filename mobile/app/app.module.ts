import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
//
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from '~/login/login.component';
import { RegisterComponent } from '~/register/register.component';
import { CharitiesComponent } from '~/charities/charities.component';
import { CharityComponent } from '~/charities/charity/charity.component';
import { ProfileComponent } from '~/profile/profile.component';
// Services
import { LoginService } from '~/login/login.service';
import { RegisterService } from '~/register/register.service';
import { CharitiesService } from '~/charities/charities.service';
import { ProfileService } from '~/profile/profile.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        CharitiesComponent,
        CharityComponent,
        ProfileComponent
    ],
    providers: [
        LoginService,
        RegisterService,
        CharitiesService,
        ProfileService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
