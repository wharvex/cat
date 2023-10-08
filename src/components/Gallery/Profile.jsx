import PropTypes from "prop-types";
import "./Profile.css";

export default function Profile(props) {
  return (
    <img
      src={"https://imgur.com/" + props.srcStr}
      alt={props.altTxt}
      title={props.altTxt}
      className="profile"
    />
  );
}

Profile.propTypes = {
  srcStr: PropTypes.string.isRequired,
  altTxt: PropTypes.string.isRequired,
};
