import React from "react";
import { Navbar } from "react-bootstrap";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          MSAL React Tutorial
        </a>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <h5>
        Welcome to the Microsoft Authentication Library for React Tutorial
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
};
