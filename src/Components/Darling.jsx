import React, { useState } from "react";
import "./Darling.css";
import axios from "axios";
const Darling = ({ onCloseDarling }) => {
  const [catFact, setCatFact] = useState("Cats are very clever!");
  const [dogPic, setDogPic] = useState(
    "https://cdn.pixabay.com/photo/2017/08/12/00/45/pet-2633165_640.jpg"
  );
  const fetchCatFacts = async () => {
    try {
      const url = `https://catfact.ninja/fact`;
      const response = await axios.get(url);

      const data = response.data.fact;
      if (data.length > 150) {
        document.getElementById("infoCat").style.fontSize = "3rem";
      } else {
        document.getElementById("infoCat").style.fontSize = "4rem";
      }
      setCatFact(data);
    } catch {
      setCatFact("Sorry today no data available");
    }
  };

  const fetchDogPics = async () => {
    try {
      const url = `https://dog.ceo/api/breeds/image/random`;
      const response = await axios.get(url);

      const data = response.data.message;
      setDogPic(data);
      document.getElementById("frame").style.backgroundImage = `url(${dogPic})`;
      document.getElementById("message").textContent =
        "“My cats inspire me daily. They inspire me to get a dog!”  - Greg Curtis";
      document.getElementById("clickForFacts").style.display = "none";
    } catch {
      setDogPic(
        "https://cdn.pixabay.com/photo/2015/07/04/21/59/salty-dog-831762_640.jpg"
      );
    }
  };

  return (
    <div className="darlingModule">
      <img
        id="frame"
        src="https://cdn.pixabay.com/photo/2016/10/12/09/37/photo-frame-1733943_640.png"
      ></img>
      <div id="infoCat">
        <span id="message">{catFact}</span>
        <button id="clickForFacts" onClick={fetchCatFacts}>
          more facts
        </button>
        <button id="clickForFacts" onClick={fetchDogPics}>
          change Darling
        </button>
      </div>
      <button id="closeDarlingBtn" onClick={onCloseDarling}>
        x
      </button>
    </div>
  );
};

export default Darling;
