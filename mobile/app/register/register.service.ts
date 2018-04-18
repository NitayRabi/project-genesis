import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { RestClass } from '~/models';

@Injectable()
export class RegisterService extends RestClass {
    constructor(httpClient: HttpClient){
        super(httpClient, '');
    }
    /**
     * TODO - register
     * Add types
     */
    register() {

    }

    /**
     * TODO - facebook register
     * Add types
     */
    fRegister() {

    }

}
