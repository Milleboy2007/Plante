import { useEffect, useState } from 'react'
import './button.css'

function Button(){

    // const [isChanged, setIsChanged] = useState(false)

    // useEffect(() =>{
    //     try{
    //         fetch(`http://localhost:3001/api/pump`, {
    //             method:'POST'
    //         }).catch(console.log("POST FAIL"))
    //     }catch{
    //         console.log("POST FAIL")
    //     }
    // }, [isChanged])

    function buttonClick(){
        try{
            fetch(`http://localhost:3001/api/pump`, {
                method:'POST'
            })
        }catch{
            console.log("POST FAIL")
        }
    }

    return (
    <>
        <button onClick={buttonClick}>Arroser la plante</button>
    </>
    )
}

export default Button