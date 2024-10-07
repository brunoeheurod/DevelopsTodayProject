import { Container } from "@/components/Container"
import Link from 'next/link'
import Image from 'next/image'
import FeatherIcon from "feather-icons-react"

export const Navigation = () => {
    return (
        <Container className="flex justify-between py-5">
          <Link href="/">
          <h2 className="text-4xl font-extrabold dark:text-white">Countries List</h2>
          </Link>
          {/* <Link
            href="/quiz"
            className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
          >
            <FeatherIcon icon="arrow-right" />
            Take a Quiz
          </Link> */}
        </Container>
     
    )
  }