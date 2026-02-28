import { use, useState } from "react";
import SingleCountry from "../Component/SingleCountry";

export default function Countries({ countriesPromise }) {
  const [visiteFlags, setVisitedFlags] = useState([]);
  const [visiteCountries, setVisitedCountries] = useState([]);
  const countries = use(countriesPromise);
  const countriess = countries.countries;
  //   added countries name
  const handleVisitedCountries = (countrie) => {
    console.log(countrie);
    const newVisitedCountries = [...visiteCountries, countrie];
    setVisitedCountries(newVisitedCountries);
  };
  //   added flags
  const handleVisitedFlag = (flag) => {
    console.log("handleVisitedFlag", flag);
    const newFlag = [...visiteFlags, flag];
    setVisitedFlags(newFlag);
  };
  return (
    <div>
      <h1>{countriess.length}</h1>
      <h1>Total Country visited: {visiteCountries.length}</h1>
      <h1>Total Country flag: {visiteFlags.length}</h1>
      <ol>
        {visiteCountries.map((counntri, index) => (
          <li key={index}>{counntri?.cca3?.cca3}</li>
        ))}
      </ol>
      <div className={`container grid grid-cols-4 ${visiteFlags.length>0}&&"p-8 my-24 border"`}>
        {visiteFlags.map((flag,index) => (
          <img className="h-40 m-8 w-" key={index} src={flag}></img>
        ))}
      </div>
      <div className="grid grid-cols-3">
        {countriess.map((countrie, index) => (
          <SingleCountry
            key={index}
            handleVisitedCountries={handleVisitedCountries}
            countrie={countrie}
            handleVisitedFlag={handleVisitedFlag}
          ></SingleCountry>
        ))}
      </div>
    </div>
  );
}
