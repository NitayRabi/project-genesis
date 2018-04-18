import { Component, OnInit } from '@angular/core';
//
import { CharitiesService } from '~/charities/charities.service';

@Component({
    selector: 'ns-items',
    moduleId: module.id,
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class CharityComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private charitiesService: CharitiesService) { }

    ngOnInit(): void {
        // Use initial logic here (get charity details)
    }
}