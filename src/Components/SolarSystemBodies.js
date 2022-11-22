import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BodiesList from "./BodiesList";


function SolarSystemBodies() {
  const [bodies, setBodies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

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

  return (
    <div>
      <h1>from solar system</h1>
      {bodies && <BodiesList bodies={bodies} />}
    </div>
  );
}

export default SolarSystemBodies;

