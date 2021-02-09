import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [],
  providers: [NgxSpinnerService],
  exports: [NgxSpinnerModule],
  imports: [CommonModule, RouterModule, NgxSpinnerModule],
})
export class SharedModule {}
