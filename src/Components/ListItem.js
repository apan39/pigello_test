import ListSubItem from "./ListSubItem";
import RowStyle from "./ListStyles/RowStyle";

function ListItem(props) {
    function isTypeMoon() {
      
      if (props.body.bodyType === "Moon") {
        return (
          <div> Orbits: {props.body.aroundPlanet.planet}</div>
        );
      }
    }
    return (
      <>
        <RowStyle>
          {props.body.name}
          {props.body && ( <div> Type: {props.body.bodyType}</div>)}
          {props.body.moons && <div> Moons:</div>}
  
          {isTypeMoon()}
  
          <div>
          {props.body.moons &&
            props.body.moons.map((item, i) => (
              <ListSubItem key={i} item={item} />
            ))}
            </div>
  
        </RowStyle>
      </>
    );
  }


  export default ListItem;