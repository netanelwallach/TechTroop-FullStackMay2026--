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

  const [currentPage, setCurrentPage] = useState(store.currentPage);
  const switchPage = () => {
    let page = currentPage;
    if (page === "Home") {
      setCurrentPage("Landing");
    } else {
      setCurrentPage("Home");
    }
  };

  const [shouldDiscount, setShouldDiscount] = useState(store.shouldDiscount);
  let giveDiscount = shouldDiscount;
  const switchDiscount = () => {
    setShouldDiscount(!giveDiscount);
  };

  return (
    <>
      <span>
        <button onClick={switchPage}>
          {currentPage === "Home" ? "Landing" : "Home"}
        </button>
      </span>
      <span>
        <button onClick={switchDiscount}>
          {shouldDiscount === true ? "Cancel Discount" : "Give Discount"}
        </button>
      </span>
      {currentPage === "Home" ? (
        <Home store={items} giveDiscount={giveDiscount} />
      ) : (
        <Landing user={user} items={items} />
      )}
    </>
  );
};

export default StoreApp;
