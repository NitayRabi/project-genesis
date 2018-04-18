import { Component, OnInit } from '@angular/core';
//
import { CharitiesService } from '~/charities/charities.service';

@Component({
    selector: 'ns-charities',
    moduleId: module.id,
    templateUrl: './charities.component.html',
    styleUrls: ['./charities.component.css']
})
export class CharitiesComponent implements OnInit {
    charities: any[] = [
        {
            id: 1,
            name: 'Something'
        },
        {
            id: 2,
            name: 'Something Else'
        },
        {
            id: 3,
            name: 'Something Completely Different'
        }
    ];
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private charitiesService: CharitiesService) { }

    ngOnInit(): void {
        // Use initial logic here (get all charities)
    }
}