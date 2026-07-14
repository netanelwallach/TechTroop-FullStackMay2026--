function Contact({ name, onDisplayConvo }) {
  return (
    <>
      <div onClick={() => onDisplayConvo(name)}>{name}</div>
    </>
  );
}

export default Contact;
