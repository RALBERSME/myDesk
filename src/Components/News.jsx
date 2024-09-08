import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";
const News = ({ onCloseNews }) => {
  const [headline, setHeadline] = useState({
    title: "Welcome to my desk...",
    description: " here you can find all you need",
    publishedAt: 2024,
    source: { name: " by Reinhild", url: " myDesk" },
  });
  const [category, setCategory] = useState("business");

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
        // const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=9c404c552f6102517c9c531e4d8475da`;
        const response = await axios.get(url);

        const fetchedNews = response.data.articles;

        setHeadline(fetchedNews[0]);
      } catch {
        console.log("no fetching");
      }
    };

    fetchNews();
  }, [onCategoryChange]);
  return (
    <div className="newsModule">
      <fieldset>
        <legend>Select a category:</legend>

        <div className="row">
          {" "}
          <input
            type="radio"
            id="business"
            name="newsCategory"
            className="newsCategory"
            value="business"
            checked={category === "business"}
            onChange={onCategoryChange}
          />
          <label htmlFor="business">Business</label>
        </div>

        <div className="row">
          <input
            type="radio"
            id="entertainment"
            name="newsCategory"
            className="newsCategory"
            value="entertainment"
            checked={category === "entertainment"}
            onChange={onCategoryChange}
          />
          <label htmlFor="entertainment">Entertainment</label>
        </div>

        <div className="row">
          <input
            type="radio"
            id="general"
            name="newsCategory"
            className="newsCategory"
            value="general"
            checked={category === "general"}
            onChange={onCategoryChange}
          />
          <label htmlFor="general">General</label>
        </div>
        <div className="row">
          <input
            type="radio"
            id="health"
            name="newsCategory"
            className="newsCategory"
            value="health"
            checked={category === "health"}
            onChange={onCategoryChange}
          />
          <label htmlFor="health">Health</label>
        </div>
        <div className="row">
          <input
            type="radio"
            id="science"
            name="newsCategory"
            className="newsCategory"
            value="science"
            checked={category === "science"}
            onChange={onCategoryChange}
          />
          <label htmlFor="science">Science</label>
        </div>
        <div className="row">
          <input
            type="radio"
            id="sports"
            name="newsCategory"
            className="newsCategory"
            value="sports"
            checked={category === "sports"}
            onChange={onCategoryChange}
          />
          <label htmlFor="sports">Sports</label>
        </div>
        <div className="row">
          <input
            type="radio"
            id="technology"
            name="newsCategory"
            className="newsCategory"
            value="technology"
            checked={category === "technology"}
            onChange={onCategoryChange}
          />
          <label htmlFor="technology">Technology</label>
        </div>
      </fieldset>
      <h1 id="infoMarquee">
        {headline && (
          <marquee className="black" id="news" scrollamount="12">
            {headline.title} ---
            {headline.description} --- published at {headline.publishedAt} ---
            source {headline.source.name} --- url {headline.source.url} ---
          </marquee>
        )}{" "}
      </h1>{" "}
      <button id="closeNews" onClick={onCloseNews}>
        x
      </button>
    </div>
  );
};

export default News;
