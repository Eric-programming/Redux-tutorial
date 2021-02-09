import { _films_route, _species_route } from "./route";
interface IMapping {
  label: string;
  key: string;
  isList: boolean;
  isLink: boolean;
}
export const SpecieUIMapping: IMapping[] = [
  {
    label: "classification",
    key: "classification",
    isLink: false,
    isList: false,
  },
  { label: "designation", key: "designation", isLink: false, isList: false },
  {
    label: "Average Height",
    key: "average_height",
    isLink: false,
    isList: false,
  },
  {
    label: "Average Lifespan",
    key: "average_lifespan",
    isLink: false,
    isList: false,
  },
  { label: "Eye Colors", key: "eye_colors", isLink: false, isList: false },
  { label: "Hair Colors", key: "hair_colors", isLink: false, isList: false },
  { label: "Skin Colors", key: "skin_colors", isLink: false, isList: false },
  { label: "language", key: "language", isLink: false, isList: false },
  { label: "homeworld", key: "homeworld", isLink: true, isList: false },
  { label: "people", key: "people", isLink: true, isList: true },
  {
    label: "films",
    key: "films",
    isLink: true,
    isList: true,
  },
  { label: "url", key: "url", isLink: true, isList: false },
  { label: "created", key: "created", isLink: false, isList: false },
  { label: "edited", key: "edited", isLink: false, isList: false },
];

export const FilmUIMapping: IMapping[] = [
  { label: "description", key: "opening_crawl", isLink: false, isList: false },
  { label: "episode", key: "episode_id", isLink: false, isList: false },
  { label: "director", key: "director", isLink: false, isList: false },
  { label: "producer", key: "producer", isLink: false, isList: false },
  { label: "Release Date", key: "release_date", isLink: false, isList: false },
  {
    label: "species",
    key: "species",
    isLink: true,
    isList: true,
  },
  {
    label: "starships",
    key: "starships",
    isLink: true,
    isList: true,
  },
  {
    label: "vehicles",
    key: "vehicles",
    isLink: true,
    isList: true,
  },
  {
    label: "characters",
    key: "characters",
    isLink: true,
    isList: true,
  },
  {
    label: "planets",
    key: "planets",
    isLink: true,
    isList: true,
  },
  { label: "url", key: "url", isLink: true, isList: false },
  { label: "created", key: "created", isLink: false, isList: false },
  { label: "edited", key: "edited", isLink: false, isList: false },
];
