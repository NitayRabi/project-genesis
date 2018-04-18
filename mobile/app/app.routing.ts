import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
//
import { CharityComponent } from '~/charities/charity/charity.component';
import { CharitiesComponent } from '~/charities/charities.component';
import { LoginComponent } from '~/login/login.component';
import { RegisterComponent } from '~/register/register.component';
import { ProfileComponent } from '~/profile/profile.component';

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "profile", component: ProfileComponent },
    { path: "charities", component: CharitiesComponent },
    { path: "charity/:id", component: CharityComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }