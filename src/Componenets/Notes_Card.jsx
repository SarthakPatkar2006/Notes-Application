import React from "react";
import './style/Notes_card.css';
const Notes_Card=(props)=>{
    return(
        <div className="note-card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
};

export default Notes_Card;