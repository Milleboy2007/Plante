import './card.css'

function Card(props){
    return (
    <div className='img'>
        <img src={`./src/images/${props.img}.png`} alt={`${props.img}`} width={100}/>
        <h3>{props.name}</h3>
        <p>{props.stat ? props.stat: "--"} %</p>
    </div>
    )
}

export default Card