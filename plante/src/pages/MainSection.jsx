import './mainSection.css'
import CardList from '../components/CardList'
import Button from '../components/Button'

function MainSection(props){
    return (
    <>
        <main>
            <CardList cards={props.cards}/>
            <Button/>
        </main>
    </>
    )
}

export default MainSection