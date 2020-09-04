import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});
// query for the different inputs
test("renders ContactForm without crashing", async () => {
  render(<ContactForm />);
  //query for the submit button
  const submitBtn = screen.getByTestId(/submit/i);
  // click on the submit button

  const firstNameInput = screen.getByPlaceholderText(/edd/i);
  const lastNameInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/message/i);
  // fill out the inputs
  fireEvent.change(firstNameInput, { target: { value: "tiger" } });
  fireEvent.change(lastNameInput, { target: { value: 3 } });
  fireEvent.change(emailInput, { target: { value: "gryww@gmail.com" } });
  fireEvent.change(messageInput, { target: { value: "some notes" } });

  fireEvent.click(submitBtn);
});
test("renders ContactForm without crashing",  () => {
  const firstNameInput = screen.getByPlaceholderText(/edd/i);
  const lastNameInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/message/i);
  //query for the submit button
  const submitBtn = screen.getByTestId(/submit/i);
  // click on the submit button
  fireEvent.click(submitBtn);
  expect(firstNameInput).toHaveValue(""),
  expect(lastNameInput).toHaveValue(""),
  expect(emailInput).toHaveValue(""),
  expect(messageInput).toHaveValue(""),

});
