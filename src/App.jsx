import React from "react";
// import "./App.css";

const App = () => {
  return (
    <div className="container">
      <form>

        <h2>Notes App</h2>

        <input
          type="text"
          placeholder="Enter Notes Heading"
        />

        <textarea
          placeholder="Enter Notes"
        >
        </textarea>

        <button>Add Note</button>

      </form>
    </div>
  );
}

export default App;