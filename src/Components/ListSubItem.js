import RowSubItemStyle from "./ListStyles/RowSubItemStyle";

function ListSubItem(props) {
  return (
    <>
      <RowSubItemStyle>{props.item.moon}</RowSubItemStyle>
    </>
  );
}

export default ListSubItem;
