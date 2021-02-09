import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotfoundComponent } from "./Core/notfound/notfound.component";
import { ServerErrorComponent } from "./Core/server-error/server-error.component";
import {
  _films_route,
  _notfound_,
  _servererror_,
  _species_route,
} from "./Shared/constants/route";

// Implementation of lazy loading for modules to optimize application in future development
const routes: Routes = [
  {
    path: _films_route,
    loadChildren: () =>
      import("./modules/Films/films.module").then((m) => m.FilmsModule),
  },
  {
    path: _species_route,
    loadChildren: () =>
      import("./modules/Species/species.module").then((m) => m.SpeciesModule),
  },
  {
    path: _servererror_,
    component: ServerErrorComponent,
  },
  {
    path: _notfound_,
    component: NotfoundComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: _films_route,
  },
  { path: "**", redirectTo: _notfound_, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
