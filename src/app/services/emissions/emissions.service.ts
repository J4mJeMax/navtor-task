import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmissionsService {

  constructor(
    private http: HttpClient
  ) { }

  get emissions() {

  }
}
