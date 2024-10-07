import { Request, Response } from 'express';
import axios from 'axios';
import CountryInfoResponse from '../../types/country-info.response';
import CountryPopulationResponse from '../../types/country-population.response';
import CountryImageResponse from '../../types/country-image.response';
import IsoInfo from '../../types/iso-info.response';
import getIso from '../helpers/get-iso';
import getAvailableBorder from '../helpers/get-available-border';

export default async function getCountryInfo(req: Request, res: Response) {
    const { code } = req.params;
    try {
        const { data: countryInfo } = await axios.get<CountryInfoResponse>(`${process.env.COUNTRY_LIST_API_URL}/CountryInfo/${code}`);
        const { data: isoInfoList } = await axios.get<IsoInfo>(`${process.env.COUNTRY_INFO_API_URL}/countries/iso`)
        const isoInfo = getIso(isoInfoList, code)
        console.log(isoInfo)
        const { data: populationResponse } = await axios.get<CountryPopulationResponse>(`${process.env.COUNTRY_INFO_API_URL}/countries/population/q?iso3=${isoInfo.Iso3}`);
        const { data: flagResponse } = await axios.get<CountryImageResponse>(`${process.env.COUNTRY_INFO_API_URL}/countries/flag/images/q?iso2=${code}`);
        const availableborderCountries = getAvailableBorder(isoInfoList, countryInfo.borders)
       
        const countryData = {
            borderCountriesList: availableborderCountries,
            populationData: populationResponse.data.populationCounts,
            flag: flagResponse.data.flag,
            countryName: countryInfo.commonName
        };

        res.json(countryData);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            console.log('Unexpected error', error);
            res.status(500).json({ message: 'Unexpected error', error });
        }
    }
}