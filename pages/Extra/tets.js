import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await res.json();

    return {
        props: {Ananas:data}
    }
} 

const test = ({Ananas}) => {
    return (
         <div>
             <h1>testsss</h1>
             {Ananas.map(anas=>(
                 <Link href={"/Extra/"+anas.id} key={anas.id} >
                     <a className={styles.single}>
                         <h3>{anas.name}</h3>
                     </a>

                 </Link>
             )
                
                )}
        </div> 
        );
}
 
export default test;
