import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";
import React from "react";

function UserInfoImage({ id }) {
  const [user, setUser] = React.useState(undefined);
  React.useEffect(
    function getUser() {
      axios.get(`/users/${id}/`).then((response) => setUser(response.data));
    },
    [id]
  );
  return (
    <Box bg="#FFFFFF">
      <HStack justifyContent="space-between">
        <VStack justifyContent="space-between">
          <Image borderRadius="full" boxSize="300px" src={user?.image} />
        </VStack>
      </HStack>
    </Box>
  );
}

UserInfoImage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default UserInfoImage;