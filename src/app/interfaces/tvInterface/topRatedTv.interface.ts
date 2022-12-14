export interface TopRatedTv {
    page:          number;
    results:       Result[];
    total_results: number;
    total_pages:   number;
}

export interface Result {
    poster_path:       string;
    popularity:        number;
    id:                number;
    backdrop_path:     string;
    vote_average:      number;
    overview:          string;
    first_air_date:    Date;
    origin_country:    OriginCountry[];
    genre_ids:         number[];
    original_language: OriginalLanguage;
    vote_count:        number;
    name:              string;
    original_name:     string;
}

export enum OriginCountry {
    GB = "GB",
    Jp = "JP",
    Us = "US",
}

export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
}
