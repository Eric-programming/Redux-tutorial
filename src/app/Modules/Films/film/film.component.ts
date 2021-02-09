import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { FilmModel } from "src/app/modules/Films/_models/film.model";
import { _films_route, _species_route } from "src/app/Shared/constants/route";
import { FilmUIMapping } from "src/app/Shared/constants/UIMappings";
import { customLink } from "src/app/Shared/utils/customLink";
import { FilmService } from "../services/films.service";

@Component({
  selector: "app-film",
  templateUrl: "film.component.html",
})
export class FilmComponent implements OnInit {
  filmsUrl = `/${_films_route}`;
  film: FilmModel;
  Mapping = FilmUIMapping;
  constructor(
    private filmService: FilmService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.fetchFilm(params.id);
    });
  }

  fetchFilm(filmId: string): void {
    this.filmService.getFilm(filmId).subscribe((result: FilmModel) => {
      this.film = result;
      this.ModifySpecie();
    });
  }
  /**
   * Modify Specie URL to Local Specie detail page
   * http://swapi.dev/api/species/1/ => {{local}}/species/1
   */
  ModifySpecie(): void {
    const species = "species";
    this.film[species] = this.film[species].map((specie: string) => {
      return customLink(specie, _species_route);
    });
  }
}
