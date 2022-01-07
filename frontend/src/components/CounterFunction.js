//function base component
import React, { useState } from "react"; //function base component hasnt state. so we have to use useState function from react hooks.

function CounterFunction(){

    //define let type array to store the changinge value and function that use to change that value
    let[number,setNumber] = useState(0) //intial value for state

    //function for handle setNumber function
    function increment(){
        setNumber(++number)
    }
    
    return(
        <div className="App">
            <br></br>  <br></br>  <br></br> 
            <h1>Counter={number}</h1>
            <button onClick={e=>increment()}>Increment</button> 
        </div>
    )

}

export default CounterFunction;