import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
const data = [
    {
        name: "Jack",
        age: "26",
        image:"",
        country: "England"
    },
    {
        name: "Adele",
        age: "26",
        image:"",
        country: "England"
    },
    {
        name: "Taylor",
        age: "26",
        image:"",
        country: "England"
    }
]
export default function Friend(){
    const [friend, setFriend] = useState({});
    let params = useParams();
    useEffect(()=>{
        data.map((person)=> 
            person.name === params.friend 
                ? setFriend(person):"")
    })
    return (
        <section>
            <div class="d-flex flex-column align-items-center justify-content-center h-100">
                        <div class="avatar">
                            <img src={`https://via.placeholder.com/350x150?text=${friend.name}`} />
                        </div>
                        <div class="name">
                            <h3 class="title">{friend.name}</h3>
                            <h6>Age: {friend.age}</h6> 
                            <h6>Country: {friend.country}</h6> 
                        </div>
                </div>    
        </section>
    )
}