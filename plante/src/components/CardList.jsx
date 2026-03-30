import './cardList.css'
import Card from './Card'

function CardList(props){

    return (
        <>
            <Card name="Température" state={props.temp}/>
            <Card name="Humidité Ambiante" state={props.hum}/>
            <Card name="Humidité Sol" state={props.soil}/>
        </>
    )
}

export default CardList