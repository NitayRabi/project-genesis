import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { RestClass } from '~/models';

@Injectable()
export class ProfileService extends RestClass{
    constructor(httpClient: HttpClient){
        super(httpClient, '');
    }
    /**
     * TODO - get profile data
     * Add types
     */
    getProfileData() {

    }
}
