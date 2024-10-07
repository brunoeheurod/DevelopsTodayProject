import { Border } from "../../types/country-info.response";
import IsoInfo from "../../types/iso-info.response";

export default function getAvailableBorder(isoInfoList: IsoInfo, countryInfoList: Border[]) {
    const availableborderCountries = countryInfoList.map(res => {
        if (isoInfoList.data.some(iso => iso.Iso2.toUpperCase() === res.countryCode.toUpperCase())) {
            return { ...res, isAvailable: true }
        } else {
            return { ...res, isAvailable: false }
        }
    }

    )
    return availableborderCountries;
}