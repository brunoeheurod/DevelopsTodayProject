import axios from "axios";
import AvailableCountriesResponse from "@/types/available-countries.response";
import { CountryInfo } from "@/types/country-info";

export async function getAllCountries() {
    const { data } = await axios.get<AvailableCountriesResponse>(`${process.env.BACKEND_URL}/countries`)
  
    if (!data) {
      throw new Error('Failed to fetch data')
    }
  
    return data;
}

export async function getCountryByCode(code: string) {
    const { data } = await axios.get<CountryInfo>(`${process.env.BACKEND_URL}/country/${code}`)
  
    if (!data) {
      throw new Error('Failed to fetch data')
    }
  
    return data;
}
