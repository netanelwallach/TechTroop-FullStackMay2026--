const Landing = ({ user, items }) => {
  const userName = user;
  const storeItems = [...items];
  const hottestItem = storeItems.find((i) => i.hottest === true);

  return (
    <div>
      Welcome {userName}. The hottest item is
      {hottestItem.item} for ${hottestItem.price}
    </div>
  );
};

export default Landing;
