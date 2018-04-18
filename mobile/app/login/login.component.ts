import { Component, OnInit } from '@angular/core';
//
import { LoginService } from '~/login/login.service';

@Component({
    selector: 'ns-items',
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private loginService: LoginService) { }

    ngOnInit(): void {
        // Use initial logic here (use app-setting and such...)
    }
}