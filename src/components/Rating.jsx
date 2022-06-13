import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = ({ rating }) => {
  let stars = [];
  let counter = 5 - rating;
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon data-testid="start" style={{ color: "#FFD300" }} key={i} />);
  }
  for (let i = 0; i < counter; i++) {
    stars.push(
      <StarBorderIcon data-testid="star" style={{ color: "#FFD300" }} key={(i + 1) * 10} />
    );
  }

  return (
    <span className="rating">
      {stars.map((item) => {
        return item;
      })}
    </span>
  );
};

export default Rating;
