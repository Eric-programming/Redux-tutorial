import { Component, OnInit } from "@angular/core";
import { _home } from "src/app/Shared/constants/route";

@Component({
  selector: "app-server-error",
  templateUrl: "./server-error.component.html",
})
export class ServerErrorComponent implements OnInit {
  home: string = _home;
  constructor() {}

  ngOnInit(): void {}
}
