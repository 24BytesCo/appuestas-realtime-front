import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRes, Result } from 'src/app/interfaces-genericas/genericas';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(private http: HttpClient) {}

  logearse(nickName: string, pass: string) {
    return this.http.get<Result<LoginRes>>(
      `${environment.urlApi}Usuario?NickName=${nickName}&Pass=${pass}`
    );
  }
}
