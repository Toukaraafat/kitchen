import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'https://erpsystem.testdomain100.online/api';
 
  constructor(private http: HttpClient) {}

  getInfos(): Observable<any> {
    // const token = this.authService.getToken();
    // const token = localStorage.getItem('authToken');
 const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjNkOGI3YjRmYTM1YTlmZDNiZTE2ZGM0NmUzYmMzYmIzOTBkOWMyZmI1NzZlZjNjMzBkMDkxZjQ4ZWE3ZmZjYjEzN2RlZjJjNjgxODdiZWIiLCJpYXQiOjE3NDIyOTMwMzAuMTk1NzU1OTU4NTU3MTI4OTA2MjUsIm5iZiI6MTc0MjI5MzAzMC4xOTU3NTkwNTc5OTg2NTcyMjY1NjI1LCJleHAiOjE3NzM4MjkwMzAuMTg5OTY1OTYzMzYzNjQ3NDYwOTM3NSwic3ViIjoiMjYiLCJzY29wZXMiOltdfQ.poFJeTg26Jx6EMRrV2pNEhuI9mLUi1GB3c08TR2QK2Qoo90yOS77LtJddEUAvq7SGB5Yn_jN9dDx_fQPVYb9CeMBpBa67rxDhbvXlV-ZeglgIlY2o_CsFqR4f3d-OSnI_4mHdC54vLOtPMzsS3t6h8Ubjc78SUS8ZJT7Tl8IdHcrg_rOYkxF-chFDO4-znnLEiCCgUyp2aClka3tCPaH_iWgDj1GG2iwaOr5T6BS-pwGHoq5sj_x5H0mJGAhYoAICYRjrpDrx3RXWn6SUF7ET60_KMLHoDHKvvWIdcb2caHmmZSxUCoaEvt3NxAySwkhvyS6NwEg494-NdS2qvXnXE7wjQ4UXrSDgLtVt5gefLgwDaIdOsYqXDuBmUs3_ogdCggxSRN_XOGpq0YalLw6Knt0yLC0_-Wd-RIbvOhLwNV8GHxPZAa10DRJ7H86eZXdZrEHvbuxPkzypCS4IeQihQDjskObrcjvIujvk1W-Qnh8ORtMoR4M7RH4udzWO8_aFQmtO0SfS4EXmU-ekRQ3St0qUhu1OakwO0KqF0U2XEz3LPgGFUtwHpHl0whjmNSpOBQHcXQdilAs6lX6jWhy5cYrLjGOFOuekvzE27ZClJ0q2NcQgyJNzQKxngpiXj4G1aPiCJmhYSWRZeWUVRFX_otIg_qHvvUflQ17JUL5W0U"
    if (!token) {
      throw new Error('No authentication token found');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/kitchen/profile`, { headers });
  }
}
