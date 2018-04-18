import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { RestClass } from '~/models';

@Injectable()
export class CharitiesService extends RestClass {

    constructor(httpClient: HttpClient){
        super(httpClient, '');
    }
    /**
     * TODO - get charities
     * Add types
     */
    getAllCharities() {

    }

    /**
     * TODO - get charity
     * Add types
     */
    getCharity() {

    }

    /**
     * TODO - get charity
     * Add types
     */
    contactCharity() {

    }
}
