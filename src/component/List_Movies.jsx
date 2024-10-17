import { Card } from "./Card_Movie";
function List(props) {
  const { list = [] } = props;

  return (
    <div className="list">
      {list.length ? (
        list.map((card) => <Card {...card} />)
      ) : (
        <h4>Nothing FOUND</h4>
      )}
    </div>
  );
}

export { List };
