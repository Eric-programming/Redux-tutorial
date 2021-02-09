import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SpecieComponent } from "./specie/specie.component";

const routes: Routes = [
  {
    path: ":id",
    component: SpecieComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeciesRouting {}
