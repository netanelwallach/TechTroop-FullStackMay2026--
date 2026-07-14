import { useState } from "react";
import styles from "./Exercise2.module.css";
import Conversation from "./Contact";
import List from "./List";

function Exercise2() {
  const [conversation, setConversation] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  });

  const convContacts = conversation.conversations.map((c) => c.with);

  return (
    <>
      {conversation.displayConversation === null ? (
        <List contacts={convContacts} />
      ) : (
        <Conversation />
      )}
    </>
  );
}

export default Exercise2;
