import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
 

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToys(data))
  }, [])
  function updateToys(updatedToy) {
   const updatedToys = toys.map(toy => {
    if(toy.id === updatedToy.id) {
      return updatedToy;
    } else{return toy}
   })
   setToys(updatedToys)
  }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleDelete(id) {
   const updatedToys = toys.filter(toy => toy.id !== id)
   setToys(updatedToys)
   fetch(`http://localhost:3001/toys/${id}`, {
    method: 'DELETE',
   })
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} updateToys={updateToys} onDelete={handleDelete}/>
    </>
  );
}

export default App;
