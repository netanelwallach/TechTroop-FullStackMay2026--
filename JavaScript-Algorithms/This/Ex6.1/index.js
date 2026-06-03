const coffeeShop = {
  beans: 40,
  money: 100,

  buyBeans: function (beans) {
    let total = beans * 0.3;
    this.beans += beans;
    this.money -= total;
    console.log("buyBeans was activated");
  },

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 2 },
    doubleShot: { beanRequirement: 15, price: 8 },
    frenchPress: { beanRequirement: 12, price: 6 },
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    // let str = "";
    const keys = Object.keys(this.drinkRequirements);
    if (!keys.some((k) => k === drinkType)) {
      console.log("Sorry, we don't make " + drinkType);
      return false;
    }
    // } else if (this.beans) {
    else {
      if (this.drinkRequirements[drinkType].beanRequirement > this.beans) {
        this.buyBeans(50);
      }
      if (
        drinkType === "latte" ||
        drinkType === "americano" ||
        drinkType === "doubleShot" ||
        drinkType === "frenchPress"
      ) {
        // this.beans > this.drinkRequirements[drinkType]
        //   ? (this.beans -= this.drinkRequirements[drinkType])
        //   : console.log("Sorry, we're all out of beans!");
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        return true;
        // }
      }
      // else {
      //   // Not really needed but leave it here
      //   console.log("Sorry, we're all out of beans!");
      // }
    }
  },

  buyDrink: function (drinkType) {
    if (this.makeDrink(drinkType)) {
      console.log(
        "Your " +
          drinkType +
          " is ready. There are " +
          this.beans +
          " beans and " +
          this.money +
          "$ left in balance",
      );
    }
  },
};

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should console "Sorry, we're all out of beans"
