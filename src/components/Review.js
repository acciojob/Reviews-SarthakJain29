import React, {useState} from "react";
import "../styles/app.css"

function Review({reviews}){
    const [index, setIndex] = useState(0);
    const {id,name,job,image,text} = reviews[index];

    const nextIndex = ()=>{
        setIndex((index+1) % reviews.length);
    }
    const prevIndex = ()=>{
        setIndex((index-1 + reviews.length) % reviews.length);
    }
    const randomIndex = ()=>{
        let rand = Math.floor(Math.random() * reviews.length);
        if(rand === index){
            rand = (rand+1) % reviews.length;
        }
        setIndex(rand);
    }
    return (
        <div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <img className="person-img" src={image}/><br></br>
            <button onClick={prevIndex}>Previous</button>
            <button onClick={nextIndex}>Next</button>
            <button onClick={randomIndex}>Random</button>
            
        </div>
    )
    
}
export default Review;