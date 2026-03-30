import './card.css'

function Card(props){
    return (
    <>
        <img src={`./src/images/${props.key}.png`} alt=''/>
        <h3>{props.name}</h3>
        <p>{props.stat ? props.stat: "--"} %</p>
    </>
    )
}
// plante\src\images\hum.png
export default Card