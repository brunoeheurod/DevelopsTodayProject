export type Border = {
    commonName: string;
    officialName: string;
    countryCode: string,
    region: string,
    borders: null
}

type CountryInfoResponse = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string,
    borders: Border[]
}

export default CountryInfoResponse