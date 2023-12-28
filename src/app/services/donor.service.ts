import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from '../models/donor.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  port:number=7240;

  constructor(private http:HttpClient) { }
public GetAllDonors():Observable<Donor[]>{
  let url=`https://localhost:${this.port}/api/Donor`;
  return this.http.get<Donor[]>(url);
}
public deleteDonor(id:number):Observable<boolean>{
  let url=`https://localhost:${this.port}/api/Donor/deleteDonor/${id}`;
  return this.http.delete<boolean>(url);
}
public addDonor(donor:Donor):Observable<Donor>{
  let url=`https://localhost:${this.port}/api/Donor/PostDonor`;
  return this.http.post<Donor>(url,donor);
}
public UpdateDonor(donor:Donor):Observable<boolean>{
  let url=`https://localhost:${this.port}/api/Donor/UpdateDonor`;
return this.http.put<boolean>(url,donor);
}
}
