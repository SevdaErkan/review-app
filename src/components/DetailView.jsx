import { useParams, Link, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import ReadMore from "./ReadMore";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";


const DetailView = ({ reviews }) => {
  let { id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [author, setAuthor] = useState("");
  const [toggle, setToggle] = useState(false);
  const dropDownMenuItem = ["Edit", "Delete", "Submit"];
  const [detailViewContent, setDetailViewContent] = useState([]);

  const date = new Date();
  const today =
    JSON.stringify(date).slice(6, 8) +
    "/" +
    JSON.stringify(date).slice(9, 11) +
    "/" +
    JSON.stringify(date).slice(1, 5);

  const navigate = useNavigate();
  if (!reviews) {
    navigate("../", { replace: true });
  }

  let elem = reviews.filter((review) => {
    return id === review.id;
  });

  // console.log(elem[0]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Review is submitted: ");
    // navigate(`../detail/${id}`, { replace: true });
    setDetailViewContent([...detailViewContent, inputValue]);
    console.log(detailViewContent);
    setInputValue("");
    setAuthor("");
  };
  const handeClickButton = (e) => {
    const currentId = e.target.id;
    console.log(currentId);
    if (currentId === 0) {
      handleChange(e);
    } else if (currentId === 1) {
      setInputValue("");
    } else {
      console.log("submit");
      handleSubmit(e);
    }
  };

  return (
    <div className="container">
      <div className="place">
        <div className="content-1">
          {elem[0].place ? (
            <h2 style={{ marginBottom: "5px" }}>{elem[0].place}</h2>
          ) : (
            ""
          )}

          <div>
            <Rating rating={elem[0].rating} />
          </div>
          <ReadMore>{elem[0].content} </ReadMore>
          <div className="author-publish">
            <div>{elem[0].author}</div>
            <div className="date">{elem[0].published_at.slice(0, 14)}</div>
          </div>
        </div>
      </div>
      <div className="place">
        <form className="form">
          {" "}
          <Link to="/">
            <ReplyIcon />
          </Link>
          <input
          role="review"
          data-testId="addReview"
            type="text"
            value={inputValue}
            placeholder="Add your review here..."
            onChange={handleChange}
          />
          <MoreHorizIcon onClick={() => setToggle(!toggle)} />
          {toggle ? (
            <ul className="dd_list">
              {dropDownMenuItem.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      id={index}
                      onClick={(e) => {
                        handeClickButton(e);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </form>
        <div className="author-date">
          <input
            value={author}
            type="text"
            placeholder="Name"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <div className="date">{today}</div>
        </div>
      </div>
      {detailViewContent.length > 0 ? (
        <div className="place">
          {detailViewContent.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default DetailView;
