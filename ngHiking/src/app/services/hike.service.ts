import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hike } from '../model/hike';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HikeService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  private url = environment.baseUrl + 'api/hikes';
  constructor(
    private http: HttpClient
  ) { }

  index() {
    return this.http.get<Hike[]>(this.url + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('index is not working');
        })
      );
  }

  public show(id) {
    return this.http.get<Hike>(`${this.url}/${id}`).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('show method in service failed');
        })
      );
  }


  delete(id: number) {
    return this.http.delete<Hike>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error deleting hike');
      })
    );
  }
  create(data: Hike) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>(this.url, data, httpOptions)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('create method in hike service failed');
      })
    );
  }
  public update(hike: Hike) {
    return this.http.put<Hike>(`${this.url}/${hike.id}`, hike)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('update method in hike service failed');
      })
    );
  }

}
