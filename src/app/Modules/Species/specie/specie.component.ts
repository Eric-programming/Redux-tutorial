import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { SpeciesModel } from "src/app/modules/Species/_models/species.model";
import { _films_route } from "src/app/Shared/constants/route";
import { SpecieUIMapping } from "src/app/Shared/constants/UIMappings";
import { customLink } from "src/app/Shared/utils/customLink";
import { SpeciesService } from "../species.service";

@Component({
  selector: "app-specie",
  templateUrl: "specie.component.html",
})
export class SpecieComponent implements OnInit {
  filmsUrl = `/${_films_route}`;
  specie: SpeciesModel;
  Mappings = SpecieUIMapping;

  constructor(
    private specieService: SpeciesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.fetchSpecie(params.id);
    });
  }

  fetchSpecie(id: string): void {
    this.specieService.getSpecie(id).subscribe((resp: SpeciesModel) => {
      this.specie = resp;
      this.ModifyFilm();
    });
  }

  /**
   * Modify Film URL to Local Film detail page
   * http://swapi.dev/api/films/3/ => {{local}}/films/3
   */
  ModifyFilm(): void {
    const films = "films";
    this.specie[films] = this.specie[films].map((film) => {
      return customLink(film, _films_route);
    });
  }
}
