import { Center, Circle } from "@chakra-ui/react";
import PropTypes from "prop-types";

function ProfileImage({ userId }) {
  console.log(userId);
  return (
    <Center w="100%" h="50%" color="white">
      <Circle size="40px" bg="gray" color="white" alignContent="70%" />
    </Center>
  );
}

ProfileImage.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default ProfileImage;
