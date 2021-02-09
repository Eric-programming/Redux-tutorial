import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../Shared/shared.module";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ServerErrorComponent } from "./server-error/server-error.component";

@NgModule({
  declarations: [ServerErrorComponent, NotfoundComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [],
})
export class CoreModule {}
