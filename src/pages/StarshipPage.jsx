import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllStarships } from "../services/sw-api";

const StarshipPage = () => {

  const [starshipList, setStarshipList] = useState([])

  useEffect(()=> {
      const fetchStarships = async () => {
      const shipList = await getAllStarships()
      setStarshipList([shipList.results])
    }
    fetchStarships()
  },[])
  const location = useLocation()

  return ( <>
  </> );
}

export default StarshipPage;