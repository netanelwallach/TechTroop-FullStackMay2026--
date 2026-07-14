import Contact from "./Contact";

function List({ contacts, onDisplayConvo }) {
  return (
    <>
      {contacts.map((contact, index) => (
        <Contact key={index} name={contact} onDisplayConvo={onDisplayConvo} />
      ))}
    </>
  );
}

export default List;
