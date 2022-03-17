import { ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
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
import { useState } from "react";
import { useCurrentUser } from "../../contexts/UserInfoContext";
import postShape from "../../shapes/post";
import { useFeedContext } from "../Feed/FeedContext";
import PostForm from "../PostForm";
import ProfileImage from "../ProfileImage";
import DeleteConfirmation from "./DeleteConfirmation";

/**
 * @param post we need to pass a post to the function so that we can show the information we need to display
 * @param onClose tells the function if the modal window needs to be closed
 * @returns a modal window which displays information about a single post
 */
function PostModalWindow({ post, onClose }) {
  const currentUser = useCurrentUser();
  const feedContext = useFeedContext();
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  return (
    <Modal isOpen onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent bg="#efefef">
        <ModalHeader>
          {editMode ? (
            <Grid templateColumns="repeat(7, 1fr)" gap={4}>
              <GridItem colSpan={1}>
                <IconButton
                  colorScheme="teal"
                  aria-label="Search database"
                  icon={<ArrowBackIcon />}
                  onClick={() => setEditMode(false)}
                />
              </GridItem>
              <GridItem colStart={3} colEnd={7}>
                {post.event}
              </GridItem>
            </Grid>
          ) : (
            <Box>{post.event}</Box>
          )}
        </ModalHeader>
        <ModalCloseButton />
        {deleteMode && (
          <DeleteConfirmation
            postId={post.id}
            onClose={() => setDeleteMode(false)}
          />
        )}
        <ModalBody padding="0 2em 2em">
          {editMode ? (
            <PostForm
              post={post}
              onSubmit={(newValues) => {
                feedContext.onPostUpdate(newValues);
                setEditMode(false);
              }}
            />
          ) : (
            <VStack spacing={10}>
              <Box width="100%">
                <HStack spacing={10} justify="space-between">
                  <Box>
                    <ProfileImage size="xl" userId={post.user} />
                  </Box>
                  <Box bg="white" borderRadius="5px" padding="1em">
                    <HStack justify="space-between">
                      <Heading size={4}>{post.post_type}</Heading>
                      {post.user === currentUser?.id && (
                        <HStack spacing="2">
                          <Box>
                            <IconButton
                              aria-label="Edit post"
                              icon={<EditIcon />}
                              onClick={() => setEditMode(true)}
                            />
                          </Box>
                          <Box>
                            <IconButton
                              aria-label="Delete post"
                              icon={<DeleteIcon />}
                              onClick={() => setDeleteMode(true)}
                            />
                          </Box>
                        </HStack>
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
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

PostModalWindow.propTypes = {
  post: postShape.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PostModalWindow;
