import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { Link } from "react-router-dom";
import mensImg from "../../assets/mens.png";
import womensImg from "../../assets/womens.png";
import yourImg from "../../assets/your.png";
import "./LookBook.css";
function LookBook() {
  const lookbookItems = [
    {
      id: 1,
      title: "men's",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quae ducimus illum voluptatibus corporis voluptas laborum dignissimoscommodi obcaecati molestias.",
      linkname: "mens",
      img: mensImg,
    },
    {
      id: 2,
      title: "women's",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quae ducimus illum voluptatibus corporis voluptas laborum dignissimoscommodi obcaecati molestias.",
      linkname: "womens",
      img: womensImg,
    },
    {
      id: 3,
      title: "your",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quae ducimus illum voluptatibus corporis voluptas laborum dignissimoscommodi obcaecati molestias.",
      linkname: "your",
      img: yourImg,
    },
  ];
  return (
    <>
      <div className="LookBook">
        {lookbookItems.map((el) => (
          <div className="lookbook__item">
            <div className="item__img-container">
              <img src={el.img} alt={el.title} />
            </div>
            <div className="item__side">
              <h2 className="item__title">{el.title}</h2>
              <h2 className="item__subtitle">Lookbook</h2>
              <p className="item__text">{el.text}</p>
              <Link
                to={`/view ${el.linkname} look book`}
                className="item__link">
                view now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <HorizontalLine />
    </>
  );
}

export default LookBook;
