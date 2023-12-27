import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from '../models/gift.model';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
port:number=7268;
  constructor(private http:HttpClient) { }
  public getAllGifts():Observable<Gift[]>{
  let url = `https://localhost:${this.port}/api/Gift/getAllGifts`
  return this.http.get<Gift[]>(url);
  }
public postGift(gift:Gift):Observable<Gift>{
  let url = `https://localhost:${this.port}/api/Gift/PostGift`
return this.http.post<Gift>(url,gift);
}
  public deleteGift(id:number):Observable<boolean>{
    let url = `https://localhost:${this.port}/api/Gift/DeleteGift/${id}`
    return this.http.delete<boolean>(url);
  }
  public updateGift(gift:Gift):Observable<Gift>{
    let url = `https://localhost:${this.port}/api/Gift/UpdateGift`
      return this.http.put<Gift>(url,gift);
  }
}
