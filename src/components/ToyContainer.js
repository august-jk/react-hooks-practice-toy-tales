import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, updateToys }) {
  const renderToys = toys.map(toy => 
    <ToyCard 
      key={toy.id} 
      toy={toy}
      name={toy.name} 
      image={toy.image} 
      id={toy.id} 
      likes={toy.likes}
      onDelete={onDelete}
      updateToys={updateToys}
      />)
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
