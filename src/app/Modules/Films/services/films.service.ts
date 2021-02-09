import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  FilmModel,
  FilmResponse,
} from "src/app/modules/Films/_models/film.model";
import { HttpClient } from "@angular/common/http";
import { _base_URL, _films_route } from "src/app/Shared/constants/route";

// Use providedIn : root so that there is no need to import it separately in module
@Injectable({ providedIn: "root" })
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilms(): Observable<FilmResponse> {
    return this.http
      .get(_base_URL + _films_route + "/")
      .pipe(map((res: FilmResponse) => res));
  }

  getFilm(id: string): Observable<FilmModel> {
    return this.http
      .get(_base_URL + _films_route + "/" + id)
      .pipe(map((res: FilmModel) => res));
  }
}
