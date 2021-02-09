import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FilmModel } from "src/app/modules/Films/_models/film.model";
import { _films_route } from "src/app/Shared/constants/route";
import { customLink } from "src/app/Shared/utils/customLink";

@Component({
  selector: "app-film-item",
  templateUrl: "./film-item.component.html",
})
export class FilmItemComponent implements OnInit {
  @Input() films: FilmModel[];
  @Input() columns: string[];

  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * @param url swapi.dev link
   * convert to local link and direct to the film page
   */
  onRowSelect(url: string): void {
    const redirectUrl = customLink(url, _films_route);
    this.router.navigateByUrl(redirectUrl);
  }
}
