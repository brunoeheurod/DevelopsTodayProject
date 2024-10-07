import IsoInfo from "../../types/iso-info.response";

export default function getIso(isoInfoList: IsoInfo, code: string ) {

    const isoInfo = isoInfoList.data.filter(country => country.Iso2.toUpperCase() === code.toUpperCase()  )

    return isoInfo[0];
}