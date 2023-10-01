import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Vessel } from "../../shared/interfaces/vessels/vessels";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VesselsService {
  private vesselsUrl = 'https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json';

  constructor(
    private http: HttpClient
  ) { }

  getVessels(): Observable<Vessel[]> {
    return this.http.get<Vessel[]>(this.vesselsUrl);
  }
}
