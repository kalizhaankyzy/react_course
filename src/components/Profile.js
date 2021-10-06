import React from "react";
import "./Profile.css";

export default function Profile(props){
    const {name, age, country, image} = props.person
    return(
        <div className="profile_info">
            <img src={image} className="person_img"/>
            <h2>{name}</h2>
            <p>Age: {age} <br></br> Country: {country}</p>
            Skills:
            {
                props.person.skills.map((skill, index) => (
                <li key={index}>
                    {skill}
                </li>
                ))
            }
        </div>
    )
}