import './cardList.css'
import Card from './Card'

function CardList(props){

    return (
        <>
            <Card name="Température" stat={props.cards.temp}/>
            <Card name="Humidité Ambiante" stat={props.cards.hum}/>
            <Card name="Humidité Sol" stat={props.cards.soil}/>
        </>
    )
}

export default CardList