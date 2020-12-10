// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {

    constructor(props){
        super()
        this.state = { secondsLeft: props.initialCount}
    }

    checkIfZero = () => {
        if(this.state.secondsLeft === 0){
            return "BOOM!"
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
    
    render() {

        return (
            <div>
            <p>{this.checkIfZero()}</p>
            </div>
        )
    }
}

export default Bomb

