import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Covid19BrazilService {

    private baseUrl: string = 'https://covid19-brazil-api.now.sh/api/report/v1';

    constructor(private http: HttpClient) {}


    getReportByCountry(country: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${country}`);
    }

}