import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("+ button exists", () => {
  render(<App />);
  const plusbtn = screen.getByText("+");
  expect(plusbtn).toBeInTheDocument();
});
test("- button exists",()=>{
  render(<App/>)
  const minusbtn  = screen.getByText("-");
  expect(minusbtn).toBeInTheDocument();
});

test("increments counts",async ()=>{
  render(<App/>);
  const plutBtn = screen.getByText("+");
  await userEvent.click(plutBtn);
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();

});