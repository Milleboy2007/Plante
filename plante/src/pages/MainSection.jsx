import './mainSection.css'
import CardList from '../components/CardList'
import Button from '../components/Button'
import {test} from '../assets/donne'
import { useEffect, useState } from 'react'


function MainSection(){

    const [data, setData] = useState(null)
    const [isChanged, setIsChanged] = useState(false)


    useEffect(() =>{
        try{
            fetch(`http://localhost:3001/api/data`, {method:"GET"})
                .then(res => res.json())
                .then(data => setData(data))
                .then(console.log("API CALLED"))
        }catch(e){
            console.log("GET FAIL")
        }
    }, [isChanged]) 

    useState(() => {setTimeout(() => setIsChanged(!isChanged), 60000)})

    return (
    <>
        <main>
            <CardList cards={data}/>
            <Button/>
        </main>
    </>
    )
}

export default MainSection