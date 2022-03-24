import {
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Tr,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import ProfileImage from "../ProfileImage";
import UserInfo from "../UserInfo";

/**
 * @param post post from backend
 * @param onClose state of the modal
 * @returns modal containing user info to the corresponding post
 */
function UserInfoModalWindow({ post, onClose }) {
  const [user, setUser] = React.useState(undefined);

  /**
   * @returns nothing. Retrieves and sets user from backend.
   */
  React.useEffect(
    function getUser() {
      axios
        .get(`/users/${post.user}/`)
        .then((response) => setUser(response.data));
    },
    [post.user]
  );
  return (
    <Modal isOpen onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent bg="#efefef">
        <ModalHeader>{post.event}</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding="0 2em 2em">
          <VStack spacing={5}>
            <Box width="100%">
              <HStack spacing={5} justify="space-between">
                <Box>
                  <VStack>
                    <ProfileImage userId={post.user} size="xl" />
                  </VStack>
                </Box>
                <Box bg="white" borderRadius="5px" padding="2em">
                  <HStack justify="space-between">
                    <Heading size={5}>{post.post_type}</Heading>
                  </HStack>

                  <Table>
                    <Tbody>
                      <Tr>
                        <Td mb="5">{user && <UserInfo id={user.id} />}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

UserInfoModalWindow.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    post_type: PropTypes.oneOf(["BUYING", "SELLING"]),
    event: PropTypes.string,
    user: PropTypes.number,
  }).isRequired,

  onClose: PropTypes.func.isRequired,
};

export default UserInfoModalWindow;
