import RowSubItemStyle from "./ListStyles/RowSubItemStyle";

function ListSubItem(props) {
  return (
    <>
      <h1>listSubitem</h1>
      <RowSubItemStyle>{props.item.moon}</RowSubItemStyle>
    </>
  );
}

export default ListSubItem;
