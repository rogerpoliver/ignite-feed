import PropTypes from "prop-types";

export function Post(props) {
  const { author, content } = props;
  
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
