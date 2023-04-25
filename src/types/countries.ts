export interface Continent {
    _id: string;
    name: string;
    rankByPopulation: number;
    rankByGdp: number;
    rankByArea: number;
    image: string;
    countries: Country[];
    area: string;
    population: string;
}

export interface Country {
    _id: string;
    name: string;
    capital: string;
    continent: Continent;
    gdp: number;
    population: string;
    image: string;
    area: string;
    languages: string[];
    rankByArea: number;
    rankByGdp: number;
    rankByPopulation: number;
}
