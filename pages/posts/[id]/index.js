import {useRouter} from "next/router";


export default function handler(){
    const router = useRouter();
    const {id} = router.query;
    return(
        <>
            <h1>{id}</h1>
        </>
    )
}