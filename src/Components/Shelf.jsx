import React from "react";
import "./Shelf.css";
const Shelf = ({
  onShowDarling,
  onShowCalendar,
  onShowJob,
  onShowDecisions,
  onShowBar,
  onShowNews,
}) => {
  return (
    <>
      <div className="bookshelf">
        <div className="book">
          <div className="side">
            <span className="title"> Calendar</span>
          </div>
          <div className="top"></div>
          <div id="book1" className="cover" onClick={onShowCalendar}>
            click here
          </div>
        </div>
        <div className="book">
          <div className="side">
            <span className="title">Job Offers</span>
          </div>
          <div className="top"></div>
          <div id="book2" className="cover" onClick={onShowJob}>
            click here
          </div>
        </div>
        <div className="book">
          <div className="side">
            <span className="title">My Darling</span>
          </div>
          <div className="top"></div>
          <div id="book3" className="cover" onClick={onShowDarling}>
            click here
          </div>
        </div>
        <div className="book">
          <div className="side">
            <span className="title">Latest News</span>
          </div>
          <div className="top"></div>
          <div id="book4" className="cover" onClick={onShowNews}>
            Click here
          </div>
        </div>{" "}
        <div className="book">
          <div className="side">
            <span className="title">Decisions</span>
          </div>
          <div className="top"></div>
          <div id="book5" className="cover" onClick={onShowDecisions}>
            Click here
          </div>
        </div>
        <div className="book">
          <div className="side">
            <span className="title">Mini Bar</span>
          </div>
          <div className="top"></div>
          <div id="book6" className="cover" onClick={onShowBar}>
            Click here
          </div>
        </div>
      </div>
      <img
        id="shelf"
        src="https://cdn.pixabay.com/photo/2014/12/21/23/48/shelf-576089_640.png"
      ></img>
    </>
  );
};

export default Shelf;
