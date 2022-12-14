export interface TopRated {
    page:          number;
    results:       TopRatedResult[];
    total_results: number;
    total_pages:   number;
}

export interface TopRatedResult {
    poster_path:       string;
    adult:             boolean;
    overview:          string;
    release_date:      Date;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    original_language: string;
    title:             string;
    backdrop_path:     string;
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    vote_average:      number;
}