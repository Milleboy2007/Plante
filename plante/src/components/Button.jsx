import './button.css'

function Button(){

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