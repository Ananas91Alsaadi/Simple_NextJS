import { useEffect } from "react";
import Router, {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() =>{
            router.push("/")
        },3000)

    },[])
    return ( 
        <div>
<h1>Not Found</h1>

        </div>
     );
} 
 
export default NotFound;