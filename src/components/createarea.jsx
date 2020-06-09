import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';

function Create(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function data(event) {
    const { name, value } = event.target;
    setnote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submit(event) {
    event.preventDefault();
    props.onadd(note);
    setnote({ title: "", content: "" });
  }

  function change() {
   console.log("clicked")
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={data}
        value={note.title}
        placeholder="Tiltle"
      />

      <textarea
        rows="3"
        name="content"
        onChange={data}
        onClick={change}
        value={note.content}
        placeholder="Take a note..."
      />

      <button type="submit" onClick={submit}>
        <AddIcon />
      </button>
    </form>
  );
}

export default Create;
