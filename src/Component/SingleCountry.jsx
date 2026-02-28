import { useState } from "react";

export default function SingleCountry({ countrie }) {
const [visited,setVisited]=useState(false)
  const handleVisited=()=>{
    setVisited(true)
  }
  return (
    <div>
      <div className="shadow-sm card bg-base-100 w-96">
        <figure>
          <img src={countrie?.flags?.flags?.png} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {countrie?.name?.common}</h2>
          <h2 className="">population: {countrie?.population?.population}</h2>
          <h2 className="card-title">
            area : {countrie?.area?.area}
            {countrie?.area?.area > 300000 ? "Big Country" : "Small Country"}
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button onClick={handleVisited} className="btn btn-primary">
                {
                    visited?"Visited":"Not Visited"
                }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
