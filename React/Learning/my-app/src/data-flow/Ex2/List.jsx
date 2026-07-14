import Contact from "./Contact";

function List({ contacts }) {
  return (
    <>
      {contacts.map((contact, index) => (
        <Contact key={index} name={contact} />
      ))}
    </>
  );
}

export default List;
