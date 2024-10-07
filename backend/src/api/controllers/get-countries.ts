import { Request, Response } from 'express';
import axios from 'axios';
import AvailableCountriesResponse from '../../types/available-countries.response';
import IsoInfo from '../../types/iso-info.response';

export async function getCountries
 (req: Request, res: Response) {
    try {
        const response = await axios.get<AvailableCountriesResponse>(`${process.env.COUNTRY_LIST_API_URL}/AvailableCountries`);
        const { data: isoInfoList } = await axios.get<IsoInfo>(`${process.env.COUNTRY_INFO_API_URL}/countries/iso`)
        
        const availableCountries = response.data.filter(res => isoInfoList.data.some(iso => iso.Iso2.toUpperCase() === res.countryCode.toUpperCase() ) )

        res.json(availableCountries);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            console.log("Unexpected error", error);
            res.status(500).json({ message: 'Unexpected error', error });
        }

    }
}
