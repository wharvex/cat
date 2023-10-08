import PropTypes from "prop-types";
import "./Avatar.css";

export default function Avatar(props) {
  return (
    <img
      src={"https://imgur.com/" + props.srcStr}
      alt={props.altTxt}
      title={props.altTxt}
      className="avatar"
    />
  );
}

Avatar.propTypes = {
  srcStr: PropTypes.string.isRequired,
  altTxt: PropTypes.string.isRequired,
};
