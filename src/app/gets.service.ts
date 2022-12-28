import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetsService {
    constructor(private http: HttpClient) { }
    
    fetchData(title: any): Observable<any> {
       return this.http.get<any>(`https://dummyjson.com/${title}`)
    }
}
