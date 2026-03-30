import './cardList.css'
import Card from './Card'

function CardList(props){

    return (
        <>
            <Card name="Température" state={props.cards.temp}/>
            <Card name="Humidité Ambiante" state={props.cards.hum}/>
            <Card name="Humidité Sol" state={props.cards.soil}/>
        </>
    )
}

export default CardList