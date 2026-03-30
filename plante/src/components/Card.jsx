import './card.css'

function Card(props){
    return (
    <>
        <img src='' alt=''/>
        <h3>{props.name}</h3>
        <p>{props.stat ? props.stat: "--"} %</p>
    </>
    )
}

export default Card