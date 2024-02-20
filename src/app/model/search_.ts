export interface Searchs {
    Search:       Search[];
    totalResults: string;
    Response:     string;
}

export interface Search {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   string;
    Poster: string;
}

