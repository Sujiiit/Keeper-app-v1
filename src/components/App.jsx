import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Create from "./createarea";

function App() {
  const [notes, setnotes] = useState([]);
  function addnote(val) {
    setnotes(preval => [...preval, val]);
  }

  function DelNote(id) {
    setnotes(
      notes.filter((note, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div className="App">
      <Header />
      <Create onadd={addnote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={DelNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
