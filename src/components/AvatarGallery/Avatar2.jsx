import { getImageUrl } from "./utils.js";
import PropTypes from "prop-types";

export default function Avatar2({ person, size }) {
  return (
    <img
      className="avatar2"
      src={getImageUrl(person)}
      alt={person.name}
      title={person.name}
      height={size}
    />
  );
}

Avatar2.propTypes = {
  person: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};
