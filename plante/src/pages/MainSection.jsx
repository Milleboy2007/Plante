import './mainSection.css'
import CardList from '../components/CardList'
import Button from '../components/Button'
import {test} from '../assets/donne'
import { useEffect, useState } from 'react'


function MainSection(){

    const [data, setData] = useState(null)

    useEffect(() =>{
        fetch(`http://localhost:3001/api/data`)
            .then(res => res.json())
            .then(data => setData(data))
            .then(console.log("API CALLED"))
    }, [])

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