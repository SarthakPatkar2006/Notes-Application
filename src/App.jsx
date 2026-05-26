import React, { useState } from "react";
import "./App.css";
import notesImg from "./assets/notes.png";

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
  }
  const [NotesData,setNotes]=useState({
    title:"",
    content:"",
  });
  function change(e){
    const {name,value}=e.target;
    setNotes({
      ...NotesData ,//prevData+new updated Data.
      [name]:value,
    });
    // console.log(NotesData.title);
  }
  return (
    <div className="main-container">

      <div className="left-section">
        <div className="form-card">

          <h1>Notes App</h1>
          <p className="subtitle">
            Capture your ideas, tasks, and important notes in one place.
          </p>

          <form onSubmit={submitHandler}>

            <div className="input-group">
              <label>Note Title</label>
              <input
                type="text"
                name="title"
                value={NotesData.title}
                placeholder="Enter notes heading"
                onChange={change}
              />
            </div>
             <div className="input-group">
              <label>Write Note</label>
              <textarea
                placeholder="Write your note here..."
                name="content"
                value={NotesData.content}
                onChange={change}
              ></textarea>
            </div>

            <button type="submit">
              Add Note
            </button>

          </form>

        </div>
      </div>
        <div className="right-section">
        <img src={notesImg} alt="Notes Illustration" />
      </div>
      <div className="history"></div>
    </div>
  );
};

export default App;