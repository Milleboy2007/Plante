import './cardList.css'
import Card from './Card'

function CardList(props){

    return (
        <>
            <Card name="Température" stat={props.cards.temp} img="temp"/>
            <Card name="Humidité Ambiante" stat={props.cards.hum} img="hum"/>
            <Card name="Humidité Sol" stat={props.cards.soil} img="soil"/>
        </>
    )
}

export default CardList