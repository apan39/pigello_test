import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BodiesList from "./BodiesList";
import { fetchBodies } from "../store/storeExample/actions";

function SolarSystemBodies() {
  const state = useSelector((state) => state);
  const systemBodies = state.exampleStore.payload;
  const [searchParams, setSearchParams] = useSearchParams();
 
  const dispatch = useDispatch();

  const query = () => {
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

  function filterBodies(filter) {
    setSearchParams(filter);
  }

  function sortBodies(sort) {
    setSearchParams(sort);
  }

  return (
    <div>
      <h1>Bodies in the solar system</h1>

      <select name="field-name" onChange={(e) => filterBodies(e.target.value)}>
        <option>Filter bodies</option>
        <option value="">All bodies</option>
        <option value="filter=isPlanet,eq,true">Planets</option>
        <option value="filter=bodyType,eq,comet">Comets</option>
      </select>

      <select
        name="field-name"
        onChange={(e) => sortBodies(e.target.value)}
      >
        <option>Sort bodies by:</option>
        <option value="order=name">Name</option>
        <option value="order=density">Density</option>
      </select>

      {systemBodies && <BodiesList bodies={systemBodies} />}
    </div>
  );
}

export default SolarSystemBodies;
