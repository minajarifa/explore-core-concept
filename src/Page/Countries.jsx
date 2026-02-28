import { use } from "react"


export default function Countries({countriesPromise}) {
   const countries= use(countriesPromise);
   console.log(countries.countries)
  return (
    <div>Countries</div>
  )
}
