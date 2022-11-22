import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BodiesList from "./BodiesList";
import { fetchBodies } from "../store/storeExample/actions";

function SolarSystemBodies() {
  const [bodies, setBodies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const state = useSelector((state) => state);
  console.log("state", state);
  //const systemBodies = state.solarSystemStore.payload;
  const dispatch = useDispatch();

  const query = () => {
    searchParams && console.log("searchParams", searchParams.get("filter"));
    if (searchParams.get("filter")) {
      return "filter=" + searchParams.get("filter");
    }
    if (searchParams.get("order")) {
      return "order=" + searchParams.get("order");
    }
  };

  useEffect(() => {
    dispatch(fetchBodies(query));
  }, [searchParams]);

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBodies(data.bodies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function filterBodies(filter) {
    setSearchParams(filter);
  }

  function sortBodies(sort) {
    setSearchParams(sort);
  }

  return (
    <div>
      <h1>from solar system</h1>

      <select name="field-name" onChange={(e) => filterBodies(e.target.value)}>
        <option>Filter bodies</option>
        <option value="">All bodies</option>
        <option value="filter=isPlanet,eq,true">Planets</option>
        <option value="filter=bodyType,eq,comet">Comets</option>
      </select>

      <select
        name="field-name"
        // value={props.timePeriod}
        onChange={(e) => sortBodies(e.target.value)}
      >
        <option>Sort bodies by:</option>
        <option value="order=name">Name</option>
        <option value="order=density">Density</option>
      </select>

      {bodies && <BodiesList bodies={bodies} />}
    </div>
  );
}

export default SolarSystemBodies;
