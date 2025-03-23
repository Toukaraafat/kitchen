import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsWayStepsService {

  private apiUrl = 'https://erpsystem.testdomain100.online/api/kitchen/dish-ingrediant/steps';  // Make sure to use the correct endpoint

  private token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg3MWYyOTI1YWNkNGFlZmUzZTA4MDY0NTkxZTFmYTJlYmZhNTM2ZDQxNWY5NjFiN2ViMzJkZDA1Mjk2NGVkYzU0OTA5NWI0Y2I1MjMxZWMiLCJpYXQiOjE3NDIzNzczODUuMzA3NDE0MDU0ODcwNjA1NDY4NzUsIm5iZiI6MTc0MjM3NzM4NS4zMDc0MTgxMDc5ODY0NTAxOTUzMTI1LCJleHAiOjE3NzM5MTMzODUuMjkyNTEyODkzNjc2NzU3ODEyNSwic3ViIjoiMjYiLCJzY29wZXMiOltdfQ.Azw-N03cs5h7N18i9cfbJJQyDuWmxjasVsbY0KUVu6Ushgk0aOvVo4vDNNFFwE-fJWVQMhs7HakN3WHe5Yu-xkR2Hz2y9xP_uxC_kdDnQMUdGrGALkeO3xjJNITIWaq-ia0HbvldgOjvKsSzmxFIV5C6ZOCpAPS1KcSspeLswDxoLLKP8K7RLRzeu0a3EKJKysgncIYJo8RAW1nfmElWk5sfvXNnrOr3vVLpA-YxV2dsko0gl5BCWLoK7mJtDFltccvL9kma8oCCDn0Dn4mh3UHtP3P6fxtLo8BK5b_PhLA0GLjZcrw0Jhc5CeM3JFExKP__o_0T6-amWHQWjka1Ftahs96MJPzl0-eHi49iG-xOUKArzcQ7HVbpN5k32FBpdmHK9PV4r-i8_V0I2IezYeN5yN9XrB4F_V-sWeh3kTeN1nGzBmNrl_nZbLguMbrSZbaQLPuNSlKdysPcbLAq4GUQbWXX5z1za_Bzn18GfXC1M9QIBTaZwVPD3T_3hGdtmHbjPd9DnybQ63DpQA4GcUQei2aJ7x6qEtPT2CQ4WKqwPcM9c6hS9FyNey1yezNMyNuZ9ZEsfIQXtMmFy4d19dxtv3vyLQbzUgaj-s80VPXpCqNu1NrKQOjHu21Rq0mIm4wSS5BZ9_lmpKxQCtucmCUklMzvFCJDmqYXJEx7t3o`;

  constructor(private http: HttpClient) {}

  getDishIngredients(dish_id: number): Observable<any> {
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.post(this.apiUrl, { dish_id}, { headers });
  }
}
