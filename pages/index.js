import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ananas</title>
      </Head>
<div>
    <h1>Hompage</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consequuntur? Dolor repudiandae quibusdam dolore odio saepe, ipsam inventore at quod dolorum impedit possimus temporibus doloribus omnis iusto facilis ducimus quas!</p>
<Link href="/Extra/tets"><a >Go there</a></Link>
</div> </>
 )
}
