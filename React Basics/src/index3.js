import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/61ZWhkssC7L._AC_UY327_FMwebp_QL65_.jpg",
  title: "Deep Work",
  author: "Cal Newport",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/91NxYvUNf6L._AC_UY327_FMwebp_QL65_.jpg",
  title: "One Piece 01: Romance Dawn",
  author: "Eiichiro Oda",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque, soluta hic id eum amet ratione dolorem at iste consequatur!</p>
      </Book>
      <Book
        img={secondBook.img} 
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({img, title, author, children}) => {
  // const {img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
      {/* <p>{let x = 4}</p> Can't have Statement, only expression*/}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
