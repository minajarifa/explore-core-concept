import { Suspense } from "react"
import Countries from "./Countries"

const countriesPromise = fetch(`https://openapi.programming-hero.com/api/all`)
.then(res=>res.json())
export default function Home() {
  return (
    <div>
      <div>
        <Suspense fallback={<p>Nadir vai loading...</p>}>
          <Countries countriesPromise={countriesPromise}/>
        </Suspense>
      </div>
    </div>
  )
}
