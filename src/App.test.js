import { fireEvent,render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'


import App from "./App";
import Rating from "./components/Rating";
import ReviewDetailPage from "./components/ReviewDetailPage";
import DetailView from "./components/DetailView";

jest.mock("./components/ReviewDetailPage");
jest.mock("./components/DetailView");



test("renders App should header text Reviews ", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Reviews/);
});
test("Should render ReviewDetailPage on default route", () => {
  ReviewDetailPage.mockImplementation(() => <div>ReviewDetailPage</div>);
  render(<App />);
  expect(screen.getByText("ReviewDetailPage")).toBeInTheDocument();
});

test("form icon is defined",()=>{
render(<ReviewDetailPage/>)
expect(screen.queryAllByTestId("forumIcon")).toBeDefined()

})

test("rating stars visible",()=>{
  render(<ReviewDetailPage/>)
  expect(screen.queryAllByTestId("star")).toBeDefined()
})
test("in detailpage rating stars defined",()=>{
  render(<DetailView/>)
  expect(screen.queryAllByTestId("star")).toBeDefined()
})

test("add review should defined",()=>{
  render(<DetailView/>)
  const inputReviewValue=screen.queryAllByTestId("addReview")
  expect(inputReviewValue).toBeDefined()

})
test('Placeholder text should not be in the document ', () => {
  render(<DetailView/>)
  const inputNode = screen.queryByPlaceholderText('Add your review here...')
  expect(inputNode).not.toBeInTheDocument();
})




