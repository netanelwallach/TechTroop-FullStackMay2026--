const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    let str = "";
    const keys = Object.keys(this.drinkRequirements);
    if (!keys.some((k) => k === drinkType)) {
      str = "Sorry, we don't make " + drinkType;
    } else if (this.beans) {
      if (
        drinkType === "latte" ||
        drinkType === "americano" ||
        drinkType === "doubleShot" ||
        drinkType === "frenchPress"
      ) {
        this.beans > this.drinkRequirements[drinkType]
          ? (this.beans -= this.drinkRequirements[drinkType])
          : (str = "Sorry, we're all out of beans!");
      }
    } else {
      str = "Sorry, we're all out of beans!";
    }
    console.log(str);
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
