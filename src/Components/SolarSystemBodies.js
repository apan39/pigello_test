import { useEffect, useState } from "react";
import BodiesList from "./BodiesList";
//import RowStyle from "./ListStyles/RowStyle";
//import RowSubItemStyle from "./ListStyles/RowSubItemStyle";

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

// function BodiesList(props) {
//   return (
//     <>
//       <h1>Bodieslist</h1>
//       <ListStyle>
//         {props.bodies &&
//           props.bodies.map((body) => <ListItem key={body.id} body={body} />)}
//       </ListStyle>
//     </>
//   );
// }

// function ListItem(props) {
//   function isTypeMoon() {
    
//     if (props.body.bodyType === "Moon") {
//       return (
//         <div> Orbits: {props.body.aroundPlanet.planet}</div>
//       );
//     }
//   }
//   return (
//     <>
//       <RowStyle>
//         {props.body.name}
//         {props.body && ( <div> Type: {props.body.bodyType}</div>)}
//         {props.body.moons && <div> Moons:</div>}

//         {isTypeMoon()}

//         <div>
//         {props.body.moons &&
//           props.body.moons.map((item, i) => (
//             <ListSubItem key={i} item={item} />
//           ))}
//           </div>

//       </RowStyle>
//     </>
//   );
// }

// function ListSubItem(props) {
//   return (
//     <>
//       <h1>listSubitem</h1>
//       <RowSubItemStyle>{props.item.moon}</RowSubItemStyle>
//     </>
//   );
// }
