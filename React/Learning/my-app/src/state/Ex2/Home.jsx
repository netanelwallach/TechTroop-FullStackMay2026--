import Item from "./Item";

const Home = ({ store }) => {
  const storeItems = [...store];

  return (
    <>
      <h4>Store</h4>
      {storeItems.map((i, index) => (
        <Item key={index} item={i.item} price={i.price} />
      ))}
    </>
  );
};

export default Home;
