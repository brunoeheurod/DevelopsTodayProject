import { Container } from '@/components'
import { PopulationChart } from '@/components/Chart'
import { getAllCountries, getCountryByCode } from '@/lib/countries'
import Image from 'next/image'
import Link from 'next/link'
/* export const dynamicParams = false

export async function generateStaticParams() {
    const countries = await getAllCountries()
    return countries.map(country => ({ code: country.countryCode }))
} */

type PageProps = {
    params: { code: string }
}

export default async function Page({ params }: PageProps) {
    const { borderCountriesList, flag, populationData, countryName } = await getCountryByCode(params.code)
    return (
        <Container as="main" className='flex flex-col gap-5 py-5'>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold capitalize">{countryName}</h1>

            </div>

            <div
                className="relative flex overflow-hidden bg-gray-900  rounded-xl"
            >
                <Image
                    className="transition-all duration-500 hover:scale-110 hover:rotate-2"
                    src={flag}
                    alt=""
                    width={760}
                    height={435}
                />
            </div>
            <h2 className="text-xl font-bold">Border Countries</h2>
            <ul className="flex flex-wrap gap-1 text-sm">
                {borderCountriesList.map(item => {
                    return (
                        <li key={item.commonName} title={!item.isAvailable ? "Not available in API" : ""}>
                            <Link
                                href={`/countries/${item.countryCode}`}


                                className={`${!item.isAvailable ? 'pointer-events-none bg-gray-950 text-gray-400' : 'text-orange-400 bg-orange-950'} flex justify-center flex-grow px-2 py-1 rounded-full`}
                                aria-disabled={!item.isAvailable}
                                tabIndex={!item.isAvailable ? -1 : undefined}

                            >
                                {item.commonName}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <h2 className="text-xl font-bold">Country's Population Over Time</h2>
            <PopulationChart data={populationData} />
        </Container>
    );
}