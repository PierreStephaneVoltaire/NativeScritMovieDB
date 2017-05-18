export class Movie{
    private movieID: number;
    private Title: string;
    private path: string;
    private overview: string;
    private popularity: number;
    private first_air_date: string;
    constructor(){
   this.Title="N/A"
   this.path="";
   this.overview="N/A" 
   this.popularity=0;
   this.first_air_date="N/A"

    }
    getMovieID(): number { return this.movieID; }
    getTitle(): string { return this.Title; }
    getPath(): string { return this.path; }
    getOverview(): string { return this.overview };
    getPopularity(): number { return this.popularity };
    getFirst_air_date(): string { return this.first_air_date; }
    setMovieID(movieID: number): void { this.movieID = movieID; }
    setTitle(Title: string): void { this.Title = Title; }
    setPath(path: string): void { this.path = path; }
    setOverview(overview: string): void { this.overview = overview; }
    setPopularity(popularity: number): void { this.popularity = popularity };
    setFirst_air_date(first_air_date: string): void { this.first_air_date = first_air_date };

 
}
