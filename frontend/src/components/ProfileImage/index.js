import { Avatar, Center } from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ProfileImage({ userId, size = "sm" }) {
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    axios
      .get(`/users/${userId}/`)
      .then((response) => setUserObj(response.data));
  }, []);
  return (
    <Center>
      <Avatar
        size={size}
        src={userObj?.image}
        name={`${userObj?.first_name} ${userObj?.last_name}`}
      />
    </Center>
  );
}

ProfileImage.defaultProps = {
  size: "sm",
};

ProfileImage.propTypes = {
  userId: PropTypes.number.isRequired,
  size: PropTypes.string,
};

export default ProfileImage;
