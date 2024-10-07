type PopulationCount = {
    year: number,
    value: number
}

type CountryPopulationResponse = {
    error: boolean;
    msg: string;
    data: {
      country: string;
      code: string;
      iso3: string;
      populationCounts: PopulationCount[]
    }
}

export default CountryPopulationResponse;