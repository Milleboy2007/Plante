import './mainSection.css'
import CardList from '../components/CardList'
import Button from '../components/Button'
import {test} from '../assets/donne'


function MainSection(){
    return (
    <>
        <main>
            <CardList cards={test}/>
            <Button/>
        </main>
    </>
    )
}

export default MainSection