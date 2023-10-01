import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Emission} from "../../shared/interfaces/emissions/emissions";

@Injectable({
  providedIn: 'root'
})
export class EmissionsService {
  private emissionsUrl = 'https://frontendteamfiles.blob.core.windows.net/exercises/emissions.json';

  constructor(
    private http: HttpClient
  ) { }

  getEmissions(): Observable<Emission[]> {
    return this.http.get<Emission[]>(this.emissionsUrl);
  }
}
