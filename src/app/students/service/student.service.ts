import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getStudentDetails(): Observable<any> {
    return this.http.get('./assets/studentData.json');
  }
}

export interface Students {
  id: number;
  name: string;
  gender: string;
  class: string;
  section: string;
  english: number;
  hindi: number;
  maths: number;
  science: number;
}

export enum SortDirection {
  asc = 1,
  desc = 2,
  default = 0
}
