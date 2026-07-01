import Item from "./Item";

const Home = ({ store, giveDiscount }) => {
  const storeItems = [...store];

  return (
    <>
      <h4>Store</h4>
      {storeItems.map((i, index) => (
        <Item
          key={index}
          item={i.item}
          price={i.price}
          discount={giveDiscount === true ? i.discount : 0}
        />
      ))}
    </>
  );
};

export default Home;
