import { Container } from "@/components";
import { getAllCountries } from "@/lib/countries";
import AvailableCountriesResponse from "@/types/available-countries.response";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const data = await getAllCountries()
  return (

    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">

        {data?.map(item => {
          return (
            <Link
              href={`/countries/${item.countryCode}`}
              key={item.name}
              className="overflow-hidden rounded-md text-nowrap"
            >
              {/* <Image
                src={item.name}
                alt={item.name}
                className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
                width={500}
                height={500}
              /> */}
              {item.name}
            </Link>
          )
        })}


      </Container>
    </main>

  );
}
