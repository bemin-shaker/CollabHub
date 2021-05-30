import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import GroupPrompt from "./groupPrompt";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <h1>CollabHub</h1>
        <h3>Join existing group or create new group</h3>
        <GroupPrompt />
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  min-width: 100vw !important;
  display: grid;
  place-items: center;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.05);
  font-family: Montserrat;
`;
const LoginInnerContainer = styled.div`
  max-width: 80vw;
  padding: 100px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.05);
  color: #1d3461;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > h1 {
    font-weight: 900;
    color: #1d3461;
    font-size: 40px;
    margin-bottom: 13px;
  }

  > h3 {
    font-weight: 200 !important;
    margin-bottom: 20px;
  }

  > button {
    margin-top: 50px;
    border-radius: 30px !important;
    padding: 8px 15px 8px 15px;
    text-transform: inherit !important;
    background-color: green !important;
    color: white;
    transform: translateY(-20px);
  }
  button:hover,
  button:focus {
    outline: none;
    opacity: 0.95;
  }
`;
