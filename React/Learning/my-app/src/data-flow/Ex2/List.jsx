function List({ contacts }) {
  return (
    <>
      {contacts.map((contact, index) => (
        <div key={index}>{contact}</div>
      ))}
    </>
  );
}

export default List;
