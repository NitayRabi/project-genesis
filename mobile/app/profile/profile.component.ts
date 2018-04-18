import { Component, OnInit } from '@angular/core';
//
import { ProfileService } from '~/profile/profile.service';

@Component({
    selector: 'ns-profile',
    moduleId: module.id,
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        // Use initial logic here (get users full details)
    }
}