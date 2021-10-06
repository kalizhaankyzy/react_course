import React from 'react';
import './App.css'
import Profile from './components/Profile';
const persons = [
  {
    name:"Alex",
    age: 50,
    country: "Switzerland",
    skills: ["Management","Client service","Presentation"],
    image: "https://yt3.ggpht.com/ytc/AKedOLTlEpryCbdrrlX-1Gjr_L_bUAvMx_b-8EIXHoRGXA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    name:"Alice",
    age: 26,
    country: "Australia",
    skills: ["UX design","Video production","Linguist"],
    image: "https://pbs.twimg.com/profile_images/932147516308705280/niffocYW.jpg"
  },
  {
    name:"John",
    age: 24,
    country: "UK",
    skills: ["Photographer"],
    image: "https://images.squarespace-cdn.com/content/v1/511eb218e4b0813b1087b339/1521505842617-TEMLUTSVO0XXNGJQO3HW/guy+portrait+shoot-8.jpg?format=2500w"
  },
  {
    name:"Sara",
    age: 35,
    country: "USA",
    skills: ["Client service", "Management", "Linguist"],
    image: "https://henriettaphotography.com/wp-content/uploads/2020/10/Jodie-169-Edit_pp-Edit-scaled-e1602527756328.jpg"
  }
]

export default class App extends React.Component{
  state = {
    person : persons[0]
  }

  getRandomPerson = () =>{
    const randomPerson = persons[Math.floor(Math.random()*persons.length)]
    if (randomPerson === this.state.person){
      this.getRandomPerson()
    }else{
      this.setState({
        person: randomPerson
      })
    }
    
  }
  render(){

    return(
      <React.Fragment>
        <h1>Random profile</h1>
        <Profile person = {this.state.person}/>
        <button onClick={this.getRandomPerson} className="btn"> Random Profile</button>
      </React.Fragment>
    )
  }
}