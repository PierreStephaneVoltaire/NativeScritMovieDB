import { Params } from '@angular/router/router';
import { Observable } from 'rxjs/Rx';
import { MovieService } from './movie.service';
import { Movie } from './Movie';
import { Component, OnInit } from "@angular/core";
import * as textFieldModule from "tns-core-modules/ui/text-field";
import * as buttonModule from "tns-core-modules/ui/button";
import * as bindable from "tns-core-modules/ui/core/bindable";
import * as observable from "tns-core-modules/data/observable";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
 Movies:Movie[];
 movieName:string="batman";
    constructor(private movieService: MovieService) { }

    ngOnInit(): void {

    }
searchMovies(){
        console.log("binding works");
       this.movieService.getMovies(this.movieName).subscribe((param:Params)=>{this.Movies=param as Movie[]; console.log("didn't crash")});
}

}
