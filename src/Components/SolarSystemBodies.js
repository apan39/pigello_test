import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BodiesList from "./BodiesList";
import { fetchBodies, addBody } from "../store/storeExample/actions";
import SpaceButton from "./SpaceButton";
import {
  FormDivStyle,
  LabelStyle,
  InputStyle,
  InputSubmitStyle,
} from "./FormStyles";

function SolarSystemBodies() {
  const state = useSelector((state) => state);
  const systemBodies = state.exampleStore.payload;
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [isShown, setIsShown] = useState(false);
  const [inputs, setInputs] = useState(false);

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

  function handleSubmit(event) {
    event.preventDefault();
    //dispatch(addBody(inputs));
    console.log("inputs", systemBodies);
    dispatch(
      addBody({
        body: {
          name: inputs.bodyname,
          bodyType: inputs.bodytype,
          id: Math.floor(Math.random() * 100000),
        },
        bodies: systemBodies,
      })
    );
    setInputs({});
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function handleClick(event) {
    setIsShown((current) => !current);
  }


  return (
    <div>
      <h1>Bodies in the solar system</h1>
      <div>
        <SpaceButton onClick={handleClick}>Add new planet </SpaceButton>
        {/*show elements on click */}
        {isShown && (
          <FormDivStyle onSubmit={handleSubmit}>
            <LabelStyle>
              <InputStyle
                type="text"
                name="bodyname"
                placeholder="Enter a body name"
                value={inputs.bodyname || ""}
                onChange={handleChange}
              />
            </LabelStyle>
            <LabelStyle>
              <InputStyle
                type="text"
                name="bodytype"
                placeholder="Enter type"
                value={inputs.bodytype || ""}
                onChange={handleChange}
              />
            </LabelStyle>
            <InputSubmitStyle type="submit" />
          </FormDivStyle>
        )}
      </div>

      <select name="field-name" onChange={(e) => filterBodies(e.target.value)}>
        <option>Filter bodies</option>
        <option value="">All bodies</option>
        <option value="filter=isPlanet,eq,true">Planets</option>
        <option value="filter=bodyType,eq,comet">Comets</option>
      </select>

      <select name="field-name" onChange={(e) => sortBodies(e.target.value)}>
        <option>Sort bodies by:</option>
        <option value="order=name">Name</option>
        <option value="order=density">Density</option>
      </select>

      {systemBodies && <BodiesList bodies={systemBodies} />}
    </div>
  );
}

export default SolarSystemBodies;
