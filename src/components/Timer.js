import React from "react";

export default class Timer extends React.Component{
    state={
        seconds: 0
    }
    interval;
    componentDidMount = () =>{
        this.interval = setInterval(
            () => this.setState((state) => ({
                seconds: state.seconds+1
            })), 1000)
    }
    
    componentWillUnmount = () =>{
        clearInterval(this.interval);
    }
    componentDidUpdate = () =>{
        console.log(this.state.seconds);
    }
    render(){
        return(
            <React.Fragment>
                <span>Timer component</span>
                <h1>Seconds: {this.state.seconds}</h1>
            </React.Fragment>
        )
    }
}