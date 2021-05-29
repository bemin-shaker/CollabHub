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
        <img src="https://images.photowall.com/products/57205/golden-retriever.jpg?h=699&q=85"></img>
        <h1>Welcome to CollabHub</h1>
        <h2>Enter group name or create new group</h2>
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
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: green !important;
    color: white;
  }
`;