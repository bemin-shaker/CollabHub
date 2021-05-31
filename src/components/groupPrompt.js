import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import CheckIcon from "@material-ui/icons/Check";
import styled from "styled-components";
import "./style.css";

function GroupPrompt() {
  const groupRef = useRef();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("groupName", JSON.stringify(groupRef.current.value));
    setLoading(false);
  }

  return (
    <GroupContain>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <Form.Control
            className="form-input"
            placeholder="Group Name"
            ref={groupRef}
            required
          />
        </Form.Group>

        <Button disabled={loading} className="w-100" type="submit">
          <CheckIcon id="CheckIcon"></CheckIcon>
        </Button>
      </Form>
    </GroupContain>
  );
}

export default GroupPrompt;

const GroupContain = styled.div`
  > Form {
    display: flex;
    justify-content: space-around;
  }
  > Form > .form-group > .form-input {
    border-radius: 30px !important;
    background-color: #1d3461 !important;
    border: 0 !important;
    padding: 12px !important;
    width: 300px;
    margin-right: 5px;

    cursor: pointer;

    :hover,
    :focus {
      opacity: 0.95;
      background-color: #102041;
      outline: none;
    }
    *:focus {
      outline: 0 !important;
    }
  }
  button:hover,
  button:focus {
    outline: none;
    opacity: 0.95;
  }

  > Form > button {
    border-radius: 30px !important;
    background-color: #1d3461 !important;
    border: 0 !important;
    color: rgb(212, 211, 211);
    padding: 8px 10px 7px 10px;
    transform: translateY(-1px);
  }

  > Form > button > #CheckIcon {
    transform: translateY(1px);
  }
`;
