import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ children }) => {
  const text = children[0];
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const slicedTex = text.slice(0, 80);

  return (
    <p className="text">
      {isReadMore ? slicedTex : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Read More" : " Show Less"}
      </span>
    </p>
  );
};
export default ReadMore;
