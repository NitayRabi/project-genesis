import { Request } from "express";

export interface ICostumRequestOptions {
    /**
     * Replace pk for DB lookups
     */
    pk: string;
}

export interface ICustomRequest extends Request {
    custom: ICostumRequestOptions;
}
