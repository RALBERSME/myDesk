import React, { useState } from "react";
import "./Bar.css";

const Bar = ({ onCloseBar }) => {
  const [showCocktailbar, setShowCocktailbar] = useState(false);
  const [showDrink, setshowDrink] = useState(false);
  let fetchedDrinkImage = "";
  function openBar() {
    setTimeout(() => {
      setShowCocktailbar(true);
      setTimeout(() => {
        document.getElementById("cocktailbar").style.animation =
          "animateBar 5s 0s linear forwards";
      }, 10);
    }, 3000);
  }

  async function orderDrink() {
    setshowDrink(true);
    setShowCocktailbar(false);
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      const drinksArray = data.drinks;
      setShowCocktailbar(false);
      const output1 = document.getElementById("output1");
      const output2 = document.getElementById("output2");
      drinksArray.map((drink) => {
        output1.textContent = drink.strDrink;
        output2.setAttribute("src", drink.strDrinkThumb);
      });
    } catch {
      document
        .getElementById("output2")
        .setAttribute(
          "src",
          "https://cdn.pixabay.com/photo/2016/04/04/19/56/window-1308051_640.jpg"
        );

      document.getElementById("output1").textContent =
        "You better go back to work.";
      document.getElementById("orderNextDrink").style.display = "none";
    }
  }

  return (
    <div className="barModule">
      <div className="fridge" id="fridgeInside">
        <img
          width="300px"
          height="200px"
          src="https://cdn.pixabay.com/photo/2014/06/01/14/39/refrigerator-359615_640.jpg"
        />
        <img
          width="300px"
          height="200px"
          src="https://cdn.pixabay.com/photo/2022/06/08/21/42/fridge-7251301_640.jpg"
        />
        <p id="order">Maybe better a cocktail.</p>
      </div>
      <div className="fridge" id="fridgeOutside" onMouseEnter={openBar}>
        <img
          width="350px"
          height="650px"
          src="https://cdn.pixabay.com/photo/2019/02/01/06/36/graphic-3968479_640.png"
        />
      </div>{" "}
      {showDrink && (
        <div id="cocktailbar2">
          <p id="orderNextDrink" onClick={orderDrink}>
            order next drink
          </p>
          <h2 id="output1"></h2>
          <img width="450px" height="250px" id="output2"></img>
          <img id="barRoom" src={fetchedDrinkImage}></img>
        </div>
      )}
      {showCocktailbar && !showDrink && (
        <div id="cocktailbar">
          <p id="orderDrink" onClick={orderDrink}>
            order drink
          </p>
          <img
            id="barRoom"
            src="https://cdn.pixabay.com/photo/2016/03/31/18/00/restaurant-1294064_640.png"
          ></img>
        </div>
      )}
      <button id="leaveBar" onClick={onCloseBar}>
        x
      </button>
    </div>
  );
};

export default Bar;
