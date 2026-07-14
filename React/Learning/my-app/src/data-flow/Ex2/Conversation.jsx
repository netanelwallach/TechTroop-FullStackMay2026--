function Conversation({ convo, sender }) {
  return (
    <>
      {convo.map((c, index) => {
        return (
          <div key={index}>
            <span className="sender">
              {c.sender === "self" ? "Me: " : sender + ": "}
            </span>
            {c.text}
          </div>
        );
      })}
    </>
  );
}

export default Conversation;
