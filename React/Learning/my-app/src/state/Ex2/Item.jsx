const Item = ({ item, price, discount }) => {
  return (
    <div>
      {item}: {price * (1 - discount)}$
    </div>
  );
};

export default Item;
