import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { SpeciesModel } from "src/app/modules/Species/_models/species.model";
import { _base_URL, _species_route } from "src/app/Shared/constants/route";

@Injectable({ providedIn: "root" })
export class SpeciesService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch specie detail
   * @param id specie id
   */
  getSpecie(id: string): Observable<SpeciesModel> {
    return this.http
      .get(_base_URL + _species_route + "/" + id)
      .pipe(map((res: SpeciesModel) => res));
  }
}
