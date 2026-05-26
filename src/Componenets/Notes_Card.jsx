import React from "react";
import "./style/Notes_card.css";

const Notes_Card = (props) => {

    return(
        <div className="note-card">

            <h3>{props.title}</h3>

            <p>{props.content}</p>

            <div className="button-group">

                <button className="edit_note">
                    Edit
                </button>

                <button
                    className="delete_note"
                    onClick={() => props.Note_delete(props.idx)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
};

export default Notes_Card;