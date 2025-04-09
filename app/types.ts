export interface CountryDataShort {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
  };
  cca3: string;
}

export interface CountryDataLong {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  population: number;
  timezones: string[];
  continents: string[];
}
