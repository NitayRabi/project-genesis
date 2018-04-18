import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class RestClass {

    baseUrl: string;

    constructor(private http: HttpClient, baseUrl: string) {
        // Clear baseUrl from ending /
        this.baseUrl = baseUrl[baseUrl.length - 1] === '/' ? baseUrl.substring(0, baseUrl.length - 2) : baseUrl;
    }

    protected get(path: string, headres?: { [key: string]: string }): Observable<any> {
        return this.http.get(this.getFullPath(path), { headers: this.createRequestHeader(headres) });
    }

    protected post(path: string, body, headres?: { [key: string]: string }): Observable<any> {
        return this.http.post(this.getFullPath(path), body, { headers: this.createRequestHeader(headres) });
    }

    protected put(path: string, body, headres?: { [key: string]: string }): Observable<any> {
        return this.http.put(this.getFullPath(path), body, { headers: this.createRequestHeader(headres) });
    }

    protected delete(path: string, headres?: { [key: string]: string }): Observable<any> {
        return this.http.delete(this.getFullPath(path),{ headers: this.createRequestHeader(headres) });
    }

    private getFullPath(endpoint: string): string {
        if (endpoint[0] === '/') {
            return `${this.baseUrl}${endpoint}`;
        }
        return `${this.baseUrl}/${endpoint}`;
    }

    private createRequestHeader(headers?: { [key: string]: string }): HttpHeaders {
        // set headers here e.g.
        let rawHeadrs;
        const defaultHeaders = {
            "Content-Type": "application/json"
        };
        if (headers) {
            rawHeadrs = {
                    ...defaultHeaders,
                ...headers
            }
        }
        return new HttpHeaders(rawHeadrs || defaultHeaders);
    }
}