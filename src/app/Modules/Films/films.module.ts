import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FilmComponent } from "./film/film.component";
import { FilmsRouting } from "./films.routing";
import { FilmsComponent } from "./films/films.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../Shared/shared.module";
import { FilmItemComponent } from "./films/film-item/film-item.component";

@NgModule({
  declarations: [FilmsComponent, FilmComponent, FilmItemComponent],
  providers: [],
  imports: [CommonModule, FilmsRouting, FormsModule, SharedModule],
})
export class FilmsModule {}
