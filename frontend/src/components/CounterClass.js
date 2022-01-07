import React from "react";
//class component
class CounterClass extends React.Component{

    //constructor of the class
    constructor(){

        super();
        
        this.increment = this.increment.bind(this) // we bind the increment function to the class. so class knows there is a function called increment

        this.state = {
            number: 0
        }//state is a js object. inconstatnt variables define here. so react can identify the changes we make and update the webpage only with changed places without rerendering the whole web page by the server.
    
    }

    //function for handle the button
    increment(){
        this.setState({
            number: ++this.state.number
        })
    }

    //reder function return the things we do.
    render(){
        return (
            <div className="App">
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

//export the class. mathal karala  karapaaaaaaaaaaaaan
export default CounterClass;