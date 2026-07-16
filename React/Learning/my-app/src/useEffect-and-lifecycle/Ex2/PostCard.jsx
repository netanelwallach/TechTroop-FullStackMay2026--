function PostCard({ title, body, className }) {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

export default PostCard;
