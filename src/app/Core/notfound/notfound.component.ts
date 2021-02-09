import { Component, OnInit } from "@angular/core";
import { _home } from "src/app/Shared/constants/route";

@Component({
  selector: "app-notfound",
  templateUrl: "./notfound.component.html",
})
export class NotfoundComponent implements OnInit {
  home: string = _home;
  constructor() {}

  ngOnInit(): void {}
}
