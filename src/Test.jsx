import { useEffect, useState } from "react"

const elemAPI = "https://rickandmortyapi.com/api/character"

export default function GetData(){
    
    const [elements, setElements] = useState([])
    
    useEffect(()=>{
        const getData = async()=>{
            const response = await fetch(elemAPI)
            const data = await response.json()
            setElements(data.results)
            console.log("Blissmo: ", data.results)
        }
        getData();
    },[]);

return; (
    <>
    

    </>
)
}