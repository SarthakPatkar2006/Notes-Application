import React from "react";
import "./App.css";
import notesImg from "./assets/notes.png";

const App = () => {
  return (
    <div className="main-container">

      <div className="left-section">
        <div className="form-card">

          <h1>Notes App</h1>
          <p className="subtitle">
            Capture your ideas, tasks, and important notes in one place.
          </p>

          <form>

            <div className="input-group">
              <label>Note Title</label>
              <input
                type="text"
                placeholder="Enter notes heading"
              />
            </div>
             <div className="input-group">
              <label>Write Note</label>
              <textarea
                placeholder="Write your note here..."
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

    </div>
  );
};

export default App;