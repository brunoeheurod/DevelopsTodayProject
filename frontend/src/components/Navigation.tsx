import { Container } from "@/components/Container"
import Link from 'next/link'

export const Navigation = () => {
    return (
        <Container className="flex justify-between py-5">
          <Link href="/">
          <h2 className="text-4xl font-extrabold dark:text-white">Countries List</h2>
          </Link>
        </Container>
     
    )
  }