import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
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
import PropTypes from "prop-types";
import { useCurrentUser } from "../../contexts/UserInfoContext";
import ProfileImage from "../ProfileImage";

function PostModalWindow({ post, onClose }) {
  const currentUser = useCurrentUser();
  return (
    <Modal isOpen onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent bg="#efefef">
        <ModalHeader>{post.event}</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding="0 2em 2em">
          <VStack spacing={10}>
            <Box width="100%">
              <HStack spacing={10} justify="space-between">
                <Box>
                  <ProfileImage size="xl" userId={post.user} />
                </Box>
                <Box bg="white" borderRadius="5px" padding="1em">
                  <HStack justify="space-between">
                    <Heading size={4}>{post.post_type}</Heading>
                    {post.user === currentUser.id && (
                      <Box>
                        <IconButton
                          aria-label="Edit post"
                          icon={<EditIcon />}
                        />
                      </Box>
                    )}
                  </HStack>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td>Event:</Td>
                        <Td>{post.event}</Td>
                      </Tr>
                      <Tr>
                        <Td>Location:</Td>
                        <Td>{post.location}</Td>
                      </Tr>
                      <Tr>
                        <Td>Price</Td>
                        <Td>{post.price}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
              </HStack>
            </Box>
            <Box width="100%" bg="white" borderRadius="5px" padding="1em">
              <Heading size={5}>Description: </Heading>
              {post.description || "No description"}
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

PostModalWindow.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    post_type: PropTypes.oneOf(["BUYING", "SELLING"]),
    event: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    available: PropTypes.bool,
    price: PropTypes.number,
    user: PropTypes.number,
  }).isRequired,

  onClose: PropTypes.func.isRequired,
};

export default PostModalWindow;
