import { use } from "react";
import SingleCountry from "../Component/SingleCountry";

export default function Countries({ countriesPromise }) {
  const countries = use(countriesPromise);
  const countriess = countries.countries;
// console.log(countriess)
  return (
    <div>
      {countriess.length}
     <div className="grid grid-cols-3">
        {
            countriess.map(countrie=><SingleCountry key={countries.name} countrie={countrie}></SingleCountry>)
        }
     </div>
    </div>
  );
}
