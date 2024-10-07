export type PopulationCount = {
    year: number,
    value: number
}
type Border = {
    commonName: string;
    officialName: string;
    countryCode: string,
    region: string,
    borders: null;
    isAvailable: boolean;
}

export type CountryInfo = {
    borderCountriesList: Border[];
    populationData: PopulationCount[];
    flag: string;
    countryName: string;

}

