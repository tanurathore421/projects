import { useEffect, useState } from "react";
import "./notesApp.css"

export default function NotesApp() {
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);
  const[editIndex,setEditIndex]=useState(null);
  
  /*get data from local storage */
  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem("Notes"))||[];
    setList(savedNotes);
  },[]);

  /*save data in local storage*/
  useState(()=>{
    const newNote= localStorage.setItem("Notes", JSON.stringify(list));
  },[list]);

  const addOrUpdate= ()=>{
    if(note === "") return;

    if(editIndex !== null){
        const updatedNote = [...list];
        updatedNote[editIndex]=note;
        setEditIndex(null);
        setList(updatedNote);
    }else{
        const addNote=[...list,note];
        setList(addNote);
       
    }
     setNote("");
  }

  const editMode=(index)=>{
        setNote(list[index]);
        setEditIndex(index);
  }

  const delMode=(index)=>{
        const deletedNote= list.filter((__,i)=>i !== index);
        setList(deletedNote);
  }
  return (
    <>
      <input className="addNote"
        type="text"
        placeholder="enter your note here"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button className="toggle" onClick={addOrUpdate}>
        {editIndex!== null? "Update":"Add"}
      </button>

      {list.map((item, index) => (
        <div key={index}>
          <h3>{item}</h3>
          <button className="edit" onClick={()=>editMode(index)}>Edit</button>
          <button className="delete" onClick={()=>delMode(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}
