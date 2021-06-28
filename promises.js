let stocks = {
  fruits: ["mango", "pineapple", "cherry", "guvwa", "watermelon"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanut"],
};
let isOpen = true;

const order = (work, time) => {
  return new Promise((res, rej) => {
    if (isOpen) {
      setTimeout(() => {
        res(work());
      }, time);
    } else {
      rej(console.log(`Shop is closed`));
    }
  });
};
let stringMaker = (arrayName, elementNumber) => {
  str =
    stocks[arrayName][elementNumber].charAt(0).toUpperCase() +
    stocks[arrayName][elementNumber].slice(1);
  return str;
};
order(() => {
  console.log(`${stringMaker("fruits", 0)} has been selected`);
}, 2000)
  .then(() => {
    return order(() => {
      console.log("Production has started");
    }, 000);
  })
  .then(() => {
    return order(() => {
      console.log(`Your Fruit has been chopped`);
    }, 3000);
  })

  .then(() => {
    return order(() => {
      console.log(
        `${stringMaker("liquid", 0)} and ${stringMaker(
          "liquid",
          1
        )} are added to the ice-cream`
      );
    }, 2000);
  })

  .then(() => {
    return order(() => {
      console.log(`${stringMaker("holder", 1)} has been selected as a holder`);
    }, 1000);
  })

  .then(() => {
    return order(() => {
      console.log(`${stringMaker("toppings", 1)} has been added as topping`);
    }, 2000);
  })

  .then(() => {
    return order(() => {
      console.log(`Your ice-cream has been served`);
    }, 2000);
  })

  .catch(() => {
    console.log("customer left");
  })

  .finally(() => {
    console.log("Day ended, shop is closed");
  });
