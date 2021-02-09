import { Component, OnInit } from "@angular/core";
import {
  FilmModel,
  FilmResponse,
} from "src/app/modules/Films/_models/film.model";
import { COLUMNS } from "src/app/Shared/constants/columns";
import { FilmService } from "../services/films.service";

@Component({
  selector: "app-films",
  templateUrl: "./films.component.html",
})
export class FilmsComponent implements OnInit {
  films: FilmModel[];
  columns = COLUMNS;
  search: string = "";

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((resp: FilmResponse) => {
      this.films = resp.results;
    });
  }

  /**
   * Implement client side search filter on the films
   * list page to filter displayed films by title, or description
   */
  searchTable(): void {
    if (this.search === "") return;
    this.films = this.films.filter((film) => {
      const { title, opening_crawl } = film;
      return (
        title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
        opening_crawl.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      );
    });
  }
}
