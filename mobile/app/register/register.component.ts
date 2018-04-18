import { Component, OnInit } from '@angular/core';
//
import { RegisterService } from '~/register/register.service';

@Component({
    selector: 'ns-register',
    moduleId: module.id,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private registerService: RegisterService) { }

    ngOnInit(): void {
        // Use initial logic here (get all charities)
    }
}