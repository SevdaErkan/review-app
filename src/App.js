import "./App.css";
import { useState, useEffect } from "react";
import ReviewDetailPage from "./components/ReviewDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailView from "./components/DetailView";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";

const BASE_URL =
  "https://gist.githubusercontent.com/nvreynolds/f01c3bb717d28c4efeb471f0d27bcd94/raw/171236439e2d4eb9d7c8e6d49101b1301e7f9071/reviews.json";

export default function App() {
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setReviews(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
         
          <Typography variant="h6" color="inherit" component="div">
            Reviews
          </Typography>
        </Toolbar>
      </AppBar>
    </Box> */}
        <header role="heading">Reviews</header>
        <Routes>
          <Route
            path="/"
            element={<ReviewDetailPage reviews={reviews} />}
          ></Route>
          <Route
            path="detail/:id"
            element={<DetailView reviews={reviews} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}


