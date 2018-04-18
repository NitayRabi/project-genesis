import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { RestClass } from '~/models';

@Injectable()
export class LoginService extends RestClass {
    constructor(httpClient: HttpClient){
        super(httpClient, '');
    }
    /**
     * TODO - add login logic
     * Somekind of interface for login details + login request.
     */
    login() {

    }
}
