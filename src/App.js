import './App.css';
import React from 'react';
import Timer from './components/Timer';

export default class App extends React.Component{
  state = {
    showTimer: true
  }

  render(){
    return(
      <div className="app_cmp">
        <span>App component</span>
        {this.state.showTimer
        ? <div className="timer_cmp">
            <div className="timer"><Timer></Timer></div>
            <button onClick={()=> this.setState({showTimer:false})}>Stop and Remove Timer Component</button>
          </div>
        : <div className="timer_removed">Successfully removed!</div>
        }
      </div>
    )
  }
}
