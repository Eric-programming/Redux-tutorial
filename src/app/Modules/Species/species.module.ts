import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../Shared/shared.module";
import { SpecieComponent } from "./specie/specie.component";
import { SpeciesRouting } from "./species.routing";

@NgModule({
  declarations: [SpecieComponent],
  providers: [],
  imports: [CommonModule, SpeciesRouting, SharedModule],
})
export class SpeciesModule {}
