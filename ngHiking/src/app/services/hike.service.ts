import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HikeService {
  private url = environment.baseUrl + 'api/hikes';
  constructor(
    private http: HttpClient
  ) { }
}
