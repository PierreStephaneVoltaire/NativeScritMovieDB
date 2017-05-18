"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_service_1 = require("./movie.service");
var core_1 = require("@angular/core");
var ItemsComponent = (function () {
    function ItemsComponent(movieService) {
        this.movieService = movieService;
        this.movieName = "batman";
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.searchMovies = function () {
        var _this = this;
        console.log("binding works");
        this.movieService.getMovies(this.movieName).subscribe(function (param) { _this.Movies = param; console.log("didn't crash"); });
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsaURBQStDO0FBRS9DLHNDQUFrRDtBQVdsRCxJQUFhLGNBQWM7SUFHdkIsd0JBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRGpELGNBQVMsR0FBUSxRQUFRLENBQUM7SUFDMkIsQ0FBQztJQUVuRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUNMLHFDQUFZLEdBQVo7UUFBQSxpQkFHQztRQUZPLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVksSUFBSSxLQUFJLENBQUMsTUFBTSxHQUFDLEtBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDMUksQ0FBQztJQUVELHFCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtLQUN4QyxDQUFDO3FDQUlvQyw0QkFBWTtHQUhyQyxjQUFjLENBYTFCO0FBYlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE1vdmllU2VydmljZSB9IGZyb20gJy4vbW92aWUuc2VydmljZSc7XG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4vTW92aWUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgdGV4dEZpZWxkTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbmltcG9ydCAqIGFzIGJ1dHRvbk1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcbmltcG9ydCAqIGFzIGJpbmRhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcbmltcG9ydCAqIGFzIG9ic2VydmFibGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBNb3ZpZXM6TW92aWVbXTtcbiBtb3ZpZU5hbWU6c3RyaW5nPVwiYmF0bWFuXCI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb3ZpZVNlcnZpY2U6IE1vdmllU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cbnNlYXJjaE1vdmllcygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImJpbmRpbmcgd29ya3NcIik7XG4gICAgICAgdGhpcy5tb3ZpZVNlcnZpY2UuZ2V0TW92aWVzKHRoaXMubW92aWVOYW1lKS5zdWJzY3JpYmUoKHBhcmFtOlBhcmFtcyk9Pnt0aGlzLk1vdmllcz1wYXJhbSBhcyBNb3ZpZVtdOyBjb25zb2xlLmxvZyhcImRpZG4ndCBjcmFzaFwiKX0pO1xufVxuXG59XG4iXX0=