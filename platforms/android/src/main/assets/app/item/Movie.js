"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie = (function () {
    function Movie() {
        this.Title = "N/A";
        this.path = "";
        this.overview = "N/A";
        this.popularity = 0;
        this.first_air_date = "N/A";
    }
    Movie.prototype.getMovieID = function () { return this.movieID; };
    Movie.prototype.getTitle = function () { return this.Title; };
    Movie.prototype.getPath = function () { return this.path; };
    Movie.prototype.getOverview = function () { return this.overview; };
    ;
    Movie.prototype.getPopularity = function () { return this.popularity; };
    ;
    Movie.prototype.getFirst_air_date = function () { return this.first_air_date; };
    Movie.prototype.setMovieID = function (movieID) { this.movieID = movieID; };
    Movie.prototype.setTitle = function (Title) { this.Title = Title; };
    Movie.prototype.setPath = function (path) { this.path = path; };
    Movie.prototype.setOverview = function (overview) { this.overview = overview; };
    Movie.prototype.setPopularity = function (popularity) { this.popularity = popularity; };
    ;
    Movie.prototype.setFirst_air_date = function (first_air_date) { this.first_air_date = first_air_date; };
    ;
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb3ZpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBT0k7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFBO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUMsS0FBSyxDQUFBO0lBRXhCLENBQUM7SUFDRCwwQkFBVSxHQUFWLGNBQXVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3Qyx3QkFBUSxHQUFSLGNBQXFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6Qyx1QkFBTyxHQUFQLGNBQW9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2QywyQkFBVyxHQUFYLGNBQXdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDL0MsNkJBQWEsR0FBYixjQUEwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQ25ELGlDQUFpQixHQUFqQixjQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsMEJBQVUsR0FBVixVQUFXLE9BQWUsSUFBVSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0Qsd0JBQVEsR0FBUixVQUFTLEtBQWEsSUFBVSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckQsdUJBQU8sR0FBUCxVQUFRLElBQVksSUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakQsMkJBQVcsR0FBWCxVQUFZLFFBQWdCLElBQVUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLDZCQUFhLEdBQWIsVUFBYyxVQUFrQixJQUFVLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDekUsaUNBQWlCLEdBQWpCLFVBQWtCLGNBQXNCLElBQVUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUEsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUc3RixZQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb3ZpZXtcbiAgICBwcml2YXRlIG1vdmllSUQ6IG51bWJlcjtcbiAgICBwcml2YXRlIFRpdGxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXRoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBvdmVydmlldzogc3RyaW5nO1xuICAgIHByaXZhdGUgcG9wdWxhcml0eTogbnVtYmVyO1xuICAgIHByaXZhdGUgZmlyc3RfYWlyX2RhdGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgdGhpcy5UaXRsZT1cIk4vQVwiXG4gICB0aGlzLnBhdGg9XCJcIjtcbiAgIHRoaXMub3ZlcnZpZXc9XCJOL0FcIiBcbiAgIHRoaXMucG9wdWxhcml0eT0wO1xuICAgdGhpcy5maXJzdF9haXJfZGF0ZT1cIk4vQVwiXG5cbiAgICB9XG4gICAgZ2V0TW92aWVJRCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tb3ZpZUlEOyB9XG4gICAgZ2V0VGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuVGl0bGU7IH1cbiAgICBnZXRQYXRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnBhdGg7IH1cbiAgICBnZXRPdmVydmlldygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5vdmVydmlldyB9O1xuICAgIGdldFBvcHVsYXJpdHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMucG9wdWxhcml0eSB9O1xuICAgIGdldEZpcnN0X2Fpcl9kYXRlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmZpcnN0X2Fpcl9kYXRlOyB9XG4gICAgc2V0TW92aWVJRChtb3ZpZUlEOiBudW1iZXIpOiB2b2lkIHsgdGhpcy5tb3ZpZUlEID0gbW92aWVJRDsgfVxuICAgIHNldFRpdGxlKFRpdGxlOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5UaXRsZSA9IFRpdGxlOyB9XG4gICAgc2V0UGF0aChwYXRoOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5wYXRoID0gcGF0aDsgfVxuICAgIHNldE92ZXJ2aWV3KG92ZXJ2aWV3OiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5vdmVydmlldyA9IG92ZXJ2aWV3OyB9XG4gICAgc2V0UG9wdWxhcml0eShwb3B1bGFyaXR5OiBudW1iZXIpOiB2b2lkIHsgdGhpcy5wb3B1bGFyaXR5ID0gcG9wdWxhcml0eSB9O1xuICAgIHNldEZpcnN0X2Fpcl9kYXRlKGZpcnN0X2Fpcl9kYXRlOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5maXJzdF9haXJfZGF0ZSA9IGZpcnN0X2Fpcl9kYXRlIH07XG5cbiBcbn1cbiJdfQ==