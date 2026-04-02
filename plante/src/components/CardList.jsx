import './cardList.css'
import Card from './Card'

function CardList(props){

    const cards = props.cards?
        <>
            <Card name="Température" stat={props.cards.temp} img="temp"/>
            <Card name="Humidité Ambiante" stat={props.cards.hum} img="hum"/>
            <Card name="Humidité Sol" stat={props.cards.soil} img="soil"/>
        </>:
    <p>Chargement...</p>

    return (
        <>
            {cards}
        </>
    )
}

export default CardList