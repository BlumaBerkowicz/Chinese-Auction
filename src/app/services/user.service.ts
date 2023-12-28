import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from '../models/gift.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  port:number=7240;
  constructor(private http:HttpClient) { }

  public GetUserById(id:number):Observable<User>{
    let url=`https://localhost:${this.port}/api/User/GetUserById/${id}`;
    return this.http.get<User>(url);
  }
public GetAllUsers():Observable<User[]>{
  let url=`https://localhost:${this.port}/api/User/GetAllUsers`;
  return this.http.get<User[]>(url);

}
  public UpdateUser(user:User):Observable<User>{
    let url=`https://localhost:${this.port}/api/User/UpdateUser`;
    return this.http.put<User>(url,{body:user});
  }

  public DeleteUser(id:number):Observable<boolean>{
    let url=`https://localhost:${this.port}/api/User/DeleteUser/${id}`;
    return this.http.delete<boolean>(url);

  }
public PostUser(user:User):Observable<User>{
  let url=`https://localhost:${this.port}/api/User/PostUser`;
return this.http.post<User>(url,user);
}
}
