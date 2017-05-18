"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var router_2 = require("@angular/router");
var movie_service_1 = require("./movie.service");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(route, pageRoute, mvs) {
        var _this = this;
        this.route = route;
        this.pageRoute = pageRoute;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { console.dir(params["id"]); _this.movie = mvs.getMovie(params["id"]); console.dir(_this.movie); });
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    return ItemDetailComponent;
}());
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./item-detail.component.html",
    }),
    __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.PageRoute, movie_service_1.MovieService])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUF3RDtBQUN4RCx1Q0FBcUM7QUFFckMsMENBQWlEO0FBRWpELGlEQUE2QztBQU83QyxJQUFhLG1CQUFtQjtJQUc1Qiw2QkFDWSxLQUFxQixFQUFTLFNBQW9CLEVBQUMsR0FBZ0I7UUFEL0UsaUJBTUU7UUFMVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFFekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFRixzQ0FBUSxHQUFSO0lBR0EsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO0tBQzlDLENBQUM7cUNBS3FCLHVCQUFjLEVBQW9CLGtCQUFTLEVBQUssNEJBQVk7R0FKdEUsbUJBQW1CLENBZS9CO0FBZlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5cbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tIFwiLi9Nb3ZpZVwiO1xuaW1wb3J0IHtNb3ZpZVNlcnZpY2V9IGZyb20gJy4vbW92aWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5tb3ZpZTpNb3ZpZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLG12czpNb3ZpZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHsgY29uc29sZS5kaXIocGFyYW1zW1wiaWRcIl0pOyB0aGlzLm1vdmllPW12cy5nZXRNb3ZpZShwYXJhbXNbXCJpZFwiXSk7IGNvbnNvbGUuZGlyKHRoaXMubW92aWUpO30pO1xuICAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgXG5cbiAgICB9XG59XG4iXX0=