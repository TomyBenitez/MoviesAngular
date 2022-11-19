export interface AiringToday {
    page:          number;
    results:       Result[];
    total_results: number;
    total_pages:   number;
}

export interface Result {
    poster_path:       null | string;
    popularity:        number;
    id:                number;
    backdrop_path:     null | string;
    vote_average:      number;
    overview:          string;
    first_air_date:    Date;
    origin_country:    string[];
    genre_ids:         number[];
    original_language: string;
    vote_count:        number;
    name:              string;
    original_name:     string;
}
