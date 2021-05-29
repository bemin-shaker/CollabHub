import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SidebarOption from "./SidebarOption";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
//import { groupName } from "./groupPrompt";

function Sidebar() {
  const [groupName] = useState(JSON.parse(localStorage.getItem("groupName")));

  const [user] = useAuthState(auth);

  //const userN = user?.uid;

  const [channels, loading, error] = useCollection(db.collection(groupName));
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{groupName}</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />

      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />

      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--chat-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #1f487e;
  max-width: 250px;
  min-width: 250px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #1f487e;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #1f487e;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 9px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 1.5px;
    transform: translateX(-2px);
    color: green;
  }
`;
