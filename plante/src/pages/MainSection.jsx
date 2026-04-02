import './mainSection.css'
import CardList from '../components/CardList'
import Button from '../components/Button'
import {test} from '../assets/donne'
import { useEffect, useState } from 'react'


function MainSection(){

    const [data, setData] = useState(null)
    const [isChanged, setIsChanged] = useState(false)

    try{
        useEffect(() =>{
            fetch(`http://localhost:3001/api/data`)
                .then(res => res.json())
                .then(data => setData(data))
                .then(console.log("API CALLED"))
        }, [isChanged])
    }catch(e){
        console("API TRY")
    }


    useState(() => setTimeout(setIsChanged(!isChanged), 1000))

    function tt(){
        console.log("WORK")
    }

    return (
    <>
        <main>
            <CardList cards={test}/>
            <Button/>
        </main>
    </>
    )
}

export default MainSection