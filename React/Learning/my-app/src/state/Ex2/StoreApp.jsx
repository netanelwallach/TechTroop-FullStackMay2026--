import React, { useState } from "react";
import Landing from "./Landing";
import Home from "./Home";

const StoreApp = () => {
  const [store, setStore] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  });

  const user = store.user;
  const items = [...store.store];

  return (
    <>
      <Landing user={user} items={items} />
      <Home store={items} />
    </>
  );
};

export default StoreApp;
