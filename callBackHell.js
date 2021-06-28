let stocks = {
  fruits: ["mango", "pineapple", "cherry", "guvwa", "watermelon"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanut"],
};

let order = (fruitName, production, chopping) => {
  setTimeout(() => {
    console.log(`${stringMaker("fruits", 3)} was selected`);
    production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production for your ice-cream has started");
    setTimeout(() => {
      console.log(`The Fruit has been chopped`);
      setTimeout(() => {
        console.log(
          `Added ${stringMaker("liquid", 0)} and ${stringMaker("liquid", 1)}`
        );
        setTimeout(() => {
          console.log(`The machine was started`);
          setTimeout(() => {
            console.log(
              `${stringMaker("holder", 0)} has been selected as holder`
            );
            setTimeout(() => {
              console.log(
                `${stringMaker("toppings", 0)} has been added as a topping `
              );
              setTimeout(() => {
                console.log(`Your Ice-cream has been served  `);
              }, 2000);
            }, 3000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 000);
};
let stringMaker = (arrayName, elementNumber) => {
  str =
    stocks[arrayName][elementNumber].charAt(0).toUpperCase() +
    stocks[arrayName][elementNumber].slice(1);
  return str;
};

order(2, production);
