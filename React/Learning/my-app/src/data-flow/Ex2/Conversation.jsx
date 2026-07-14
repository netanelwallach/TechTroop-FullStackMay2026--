function Conversation({ convo, sender, goBack }) {
  if (!convo) return null;

  return (
    <>
      <button className="back" onClick={goBack}>
        Back
      </button>
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
