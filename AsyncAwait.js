// this is the main project
let stocks = {
  fruits: ["mango", "pineapple", "cherry", "guvwa", "watermelon"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanut"],
};
let isOpen = true;

function time(ms) {
  return new Promise((res, rej) => {
    if (isOpen) {
      setTimeout(res, ms);
    } else {
      rej(console.log("The shop is closed"));
    }
  });
}

async function order() {
  try {
    await time(2000);
    console.log(`${stringMaker("fruits", 4)} has been selected`);

    await time(000);
    console.log("Production has started");

    await time(3000);
    console.log(`${stringMaker("fruits", 4)} has been chopped `);

    await time(1000);
    console.log(
      `${stringMaker("liquid", 0)} and ${stringMaker(
        "liquid",
        1
      )} has been added to the ice-cream`
    );

    await time(2000);
    console.log(`${stringMaker("holder", 2)} has been selected as a base`);

    await time(2000);
    console.log(`${stringMaker("toppings", 0)} has been added as a topping.`);

    await time(500);
    console.log(`Your ice-cream has been served`);
  } catch (err) {
    console.log("customer has left");
  } finally {
    console.log("Day was over and customer left");
  }
}

let stringMaker = (arrayName, elementNumber) => {
  str =
    stocks[arrayName][elementNumber].charAt(0).toUpperCase() +
    stocks[arrayName][elementNumber].slice(1);
  return str;
};
order();
