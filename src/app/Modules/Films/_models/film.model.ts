export interface FilmModel {
  title: string; // The title of this film
  episode_id: number; // The episode number of this film.
  opening_crawl: string; // The opening paragraphs at the beginning of this film.
  director: string; // The name of the director of this film.
  producer: string; // The name(s) of the producer(s) of this film. Comma separated.
  release_date: Date; // The ISO 8601 date format of film release at original creator country.
  species: string[]; // An array of species resource URLs that are in this film.
  starships: string[]; // An array of starship resource URLs that are in this film.
  vehicles: string[]; // An array of vehicle resource URLs that are in this film.
  characters: string[]; // An array of people resource URLs that are in this film.
  planets: string[]; // An array of planet resource URLs that are in this film.
  url: string; // the hypermedia URL of this resource.
  created: Date; // the ISO 8601 date format of the time that this resource was created.
  edited: Date; // the ISO 8601 date format of the time that this resource was edited.
}

export interface FilmResponse {
  count: number;
  results: FilmModel[];
}
