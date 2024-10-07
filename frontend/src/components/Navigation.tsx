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
        </Container>
     
    )
  }