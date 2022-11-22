import { useEffect, useState } from "react";

function SolarSystemBodies() {
const [bodies, setBodies] = useState([]);


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

function BodiesList(props) {
  return (
    <>
      <h1>Bodieslist</h1>
      {props.bodies &&
          props.bodies.map((body) => <ListItem key={body.id} body={body} />)}
    </>
  );
}

function ListItem(props) {
  return (
    <>
      <h1>listitem</h1>
      {props.body.name}
    </>
  );
}

function ListSubItem(props) {
  return (
    <>
      <h1>listSubitem</h1>
    </>
  );
}
