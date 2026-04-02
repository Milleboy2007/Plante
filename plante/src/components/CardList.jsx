import './cardList.css'
import Card from './Card'

function CardList(props){

    const cards = props.cards?
        <div>
            <Card className="cardlist" name="Température" stat={props.cards.temp} img="temp"/>
            <Card className="cardlist" name="Humidité Ambiante" stat={props.cards.hum} img="hum"/>
            <Card className="cardlist" name="Humidité Sol" stat={props.cards.soil} img="soil"/>
        </div>:
    <p>Chargement...</p>

    return (
        <>
            {cards}
        </>
    )
}

export default CardList