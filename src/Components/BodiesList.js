import ListItem from "./ListItem";
import ListStyle from "./ListStyles/ListStyle";


function BodiesList(props) {
    return (
      <>
        <h1>Bodieslist</h1>
        <ListStyle>
          {props.bodies &&
            props.bodies.map((body) => <ListItem key={body.id} body={body} />)}
        </ListStyle>
      </>
    );
  }

  export default BodiesList;