import React, { useEffect, useState } from "react";
import "./App.css";
import notesImg from "./assets/notes.png";
import Notes_Card from "./Componenets/Notes_Card.jsx";
import {Delete_Note}  from "./utility/noteOperation.js";

const App = () => {

  const [NotesData, setNotes] = useState({
    title: "",
    content: "",
  });

  const [task, setTask] = useState(()=>{
    const savedNotes=localStorage.getItem("notes");
    if(savedNotes){
      return JSON.parse(savedNotes);
    }
    return [];
  });
  // save to local storage:
  useEffect(()=>{
    console.log("saving notes:",task);
    localStorage.setItem(
      "notes",JSON.stringify(task)
    );
  },[task]);  //[task]=dependency=means run only when task array changed

  function change(e) {

    const { name, value } = e.target;

    setNotes((prevData)=>({
      ...prevData,  //copying old data and add new data
      [name]: value,
    }));
  }

  const submitHandler = (e) => {

    e.preventDefault();

    if (
      NotesData.title.trim() === "" ||
      NotesData.content.trim() === ""
    ) {
      return;
    }

    setTask([...task, NotesData]);

    setNotes({
      title: "",
      content: "",
    });
  };

  function handleDelete(idx){
    const updated_task=Delete_Note(task,idx);
    setTask(updated_task);
  }
  // local storage initilization.
  return (

    <div className="main-container">

      {/* TOP SECTION */}

      <div className="top-section">

        {/* LEFT */}

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
                >
                </textarea>

              </div>

              <button type="submit">
                Add Note
              </button>

            </form>

          </div>

        </div>

        {/* RIGHT */}

        <div className="right-section">

          <img
            src={notesImg}
            alt="Notes Illustration"
          />

        </div>

      </div>

      {/* HISTORY */}

      <div className="history">

        {
          task.map((note, idx) => (
            <Notes_Card
              key={idx}
              idx={idx}
              title={note.title}
              Note_delete={handleDelete}
              content={note.content}
            />
          ))
        }

      </div>

    </div>
  );
};

export default App;