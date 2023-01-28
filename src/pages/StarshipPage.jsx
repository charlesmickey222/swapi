import { useState, useEffect } from "react";
import { getAllStarships } from "../services/sw-api";
import { Link } from "react-router-dom";
const StarshipPage = () => {
  
  const [starships, setStarships] = useState([{}])

  useEffect(()=> {
      async function fetchStarships(){
      const shipList = await getAllStarships()
      setStarships(shipList.results)
    }
    fetchStarships()
  },[])
  

  return ( 
  <div>
    {starships.length ? starships.map(starship=>
    <Link to='/starship' key={starship.name} state={{starship}}>
      {starship.name}
    </Link>
    )
    :
    ''
    }
  </div> )
}
export default StarshipPage;