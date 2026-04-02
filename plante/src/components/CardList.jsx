import './cardList.css'
import Card from './Card'

function CardList(props){

    return (
        <>
            <div>
                <Card className="cardlist" name="Température" stat={props.cards? props.cards.temp: "chargement..."} img="temp"/>
                <Card className="cardlist" name="Humidité Ambiante" stat={props.cards? props.cards.hum: "chargement..."} img="hum"/>
                <Card className="cardlist" name="Humidité Sol" stat={props.cards? props.cards.soil: "chargement..."} img="soil"/>
            </div>
        </>
    )
}

export default CardList