import './card.css'

function Card(props){
    return (
    <>
        <img src={`./src/images/${props.img}.png`} alt='' width={100}/>
        <h3>{props.name}</h3>
        <p>{props.stat ? props.stat: "--"} %</p>
    </>
    )
}
// plante\src\images\hum.png
export default Card