import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superpower } from '../interfaces';
const httpOptions = {
headers: new HttpHeaders ({'Content-Type':'application/json'})
};


@Injectable({
  providedIn: 'root',
})
export class SuperpowerService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getSuperpowers(): Observable<Superpower[]> {
    const url = `${this.baseUrl}/superpowers`;

    return this.http.get<Superpower[]>(url);
  }

  getSuperpowersByIds(ids: number[]): Observable<Superpower[]> {
    const url = `${this.baseUrl}/superpowers?${ids
      .map((id) => 'id=' + id)
      .join('&')}`;

    return this.http.get<Superpower[]>(url);
  }

  getSuperpower(id: number): Observable<Superpower> {
    const url = `${this.baseUrl}/superpowers/${id}`;

    return this.http.get<Superpower>(url);
  }

  deleteSuperpower(id: number): void {
    const url = `${this.baseUrl}/superpowers/${id}`;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: this.getSuperpower(id),
    };
    
    this.http
      .delete(url, options)
      .subscribe(() => {
      });  
  }

  addSuperpower(name,icon): Observable <Superpower> {
    const url = `${this.baseUrl}/superpowers`;
    const payload = {
      name: name,
      icon: icon
    }
    return this.http.post<Superpower>(url,payload,httpOptions)
  }
}
