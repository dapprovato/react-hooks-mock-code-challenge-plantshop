import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setPlants(data)
    })
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
      {plants.map((plant) =>
        <div className="card">
          <img src={plant.image} />
          <strong>{plant.name}</strong>
          <div>{plant.price}</div>
          {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
        </div>
      )}
    </main>
  );
}

export default PlantPage;
