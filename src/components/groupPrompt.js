import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import CheckIcon from "@material-ui/icons/Check";
import styled from "styled-components";

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
          <CheckIcon></CheckIcon>
        </Button>
      </Form>
    </GroupContain>
  );
}

export default GroupPrompt;

const GroupContain = styled.div`
  > Form > .form-group > .form-input {
    border-radius: 30px !important;
    background-color: #1d3461 !important;
    border: 0 !important;
    padding: 1.25rem 0.75rem !important;
  }

  > Form > .form-group > .form-input > ::placeholder {
    color: white !important;
  }
`;
