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

  //  this method is used to filter films based on search keyword
  searchTable(): void {
    if (this.search !== "") {
      this.films = this.films.filter((film) => {
        return (
          film.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
          film.opening_crawl
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) !== -1
        );
      });
    }
  }
}
