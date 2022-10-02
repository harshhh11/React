// const Book = ({ img, title, author}) => {
const Book = (props) => {
  // const {img, title, author} = props.book;
  function clickHandler() {
    alert("Hello world");
  }
  function print(author) {
    console.log(author);
  }
  const printtitle = () => {
    console.log(title);
  };
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2 onClick={printtitle}>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        1st Example
      </button>
      <button type="button" onClick={() => print(author)}>
        Author
      </button>
      {/* <p>{let x = 4}</p> Can't have Statement, only expression*/}
      <p>{6 + 6}</p>
    </article>
  );
};

export default Book;