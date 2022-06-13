import "./ReviewDetail.css";
import Rating from "./Rating";
import ReadMore from "./ReadMore";
import { Link } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";

const ReviewDetailPage = ({ reviews }) => {
  return (
    <div className="review">
      {reviews.map((review) => {
        return (
          <div className="places" key={review.id}>
            <h2 style={{ marginBottom: "5px" }}>{review.place}</h2>
            <div>
              <Rating rating={review.rating} />
            </div>
            <ReadMore>{review.content} </ReadMore>
            <div className="author-publish">
              <div>{review.author}</div>
              <div className="date">{review.published_at.slice(0, 14)}</div>
              <Link to={`detail/${review.id}`}>
                <ForumIcon key={review.id} data-testId="forumIcon" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ReviewDetailPage;
