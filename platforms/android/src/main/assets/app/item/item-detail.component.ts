import { Component, OnInit } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { ActivatedRoute } from "@angular/router";
import { Movie } from "./Movie";
import {MovieService} from './movie.service';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
movie:Movie;

    constructor(
        private route: ActivatedRoute,private pageRoute: PageRoute,mvs:MovieService
    ) {
         this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => { console.dir(params["id"]); this.movie=mvs.getMovie(params["id"]); console.dir(this.movie);});
     }

    ngOnInit(): void {
     

    }
}
