import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { Headers, Http, Response } from "@angular/http";

import { Injectable } from "@angular/core";
import { Movie } from './Movie';
import { Observable as RxObservable } from "rxjs/Observable";
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class MovieService {
    private BaseApiUrl = 'http://api.themoviedb.org/3/';
    private API_key = '31715fcf36132790e17c1ed113a3c822';
    private mode = 'search/multi?query=';
    private key = `&api_key=${this.API_key}`;
    movieslist: Movie[] = new Array();
    constructor(private http: Http) { }

    getMovies(movie: string) {
        let movieName = `&query=${encodeURI(movie)}`;
        let searchQuery = this.BaseApiUrl + this.mode + this.key + movieName;
        return this.http.get(searchQuery)
            .map(res => this.sanitizeData(res.json()));
    }

    sanitizeData(res): Movie[] {
        let movies: Movie[] = new Array();


        res.results.forEach(element => {
            let movie = new Movie();
            if (element.id != null && element.id != "") {
                movie.setMovieID(element.id);
            }
            if (element.overview != null && element.overview != "") {
                movie.setOverview(element.overview);
            }
            if (element.first_air_date != null && element.first_air_date != "") {
                movie.setFirst_air_date(element.first_air_date);
            }
            if (element.popularity != null && element.popularity != "") {

                movie.setPopularity(element.popularity);
            }
            if (element.popularity != null && element.popularity != "") {

                movie.setPopularity(element.popularity);
            }
            if (element.media_type == "tv") {
                movie.setTitle(`${element.name}  (TV series)`);
            } else {
                movie.setTitle(element.original_title);
            }
            if (element.poster_path != null && element.poster_path != "" && element.poster_path != "null") {
                movie.setPath(`http://image.tmdb.org/t/p/w92${element.poster_path}`);

            }
            movies.push(movie);
            if (element.media_type == "person") {
                element.known_for.forEach(subelement => {
                    let submovie = new Movie();

                    if (subelement.first_air_date != null && subelement.first_air_date != "") {
                        submovie.setFirst_air_date(subelement.first_air_date);
                    }
                    if (subelement.overview != null && subelement.overview != "") {
                        submovie.setOverview(subelement.overview);
                    }
                    if (subelement.popularity != null && subelement.popularity != "") {
                        submovie.setPopularity(subelement.popularity);
                    }
                    if (subelement.media_type == "tv") {
                        submovie.setTitle(`${subelement.name} (TV series)`);
                    } else {
                        submovie.setTitle(subelement.original_title);
                    }
                    if (subelement.id != null && subelement.id != "") {
                        submovie.setMovieID(subelement.id);
                    }
                    if (subelement.poster_path != "" && subelement.poster_path != null && subelement.poster_path != "null") {
                        submovie.setPath(`http://image.tmdb.org/t/p/w92${subelement.poster_path}`);
                    }
                    movies.push(submovie);
                });
            }

        });
        this.movieslist = movies;
        return movies;
    }
    getMovie(id: number): Movie {
        for (let i = 0; i < this.movieslist.length; i++) {
            if (this.movieslist[i].getMovieID() == id) {
                return this.movieslist[i];
            }
        }
    }
}
