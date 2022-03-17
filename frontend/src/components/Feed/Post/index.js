// import { ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import UserInfoImage from "../../UserInfoImage";
import UserInfoModalWindow from "../../UserInfoModal";
import { StyledBox } from "./style";
import PostModalWindow from "../../PostModal";

function Post({ post }) {
  const [contactModalIsOpen, setContactModalState] = useState(false);
  const [postModalIsOpen, setPostModalState] = useState(false);

  return (
    <StyledBox
      isTraded={post.traded_with}
      onClick={() => setPostModalState(true)}
    >
      {postModalIsOpen && (
        <PostModalWindow post={post} onClose={() => setPostModalState(false)} />
      )}
      <HStack
        justifyContent="space-between"
        paddingTop="1em"
        paddingBottom="1em"
        paddingRight="1em"
        cursor="pointer"
      >
        <Box width="20%">
          <Center w="100%" h="50%" color="white">
            <UserInfoImage id={post.user} boxSize="50px" />
          </Center>
        </Box>
        <Box w="70%">
          <VStack alignItems="left" spacing={1}>
            <Box>
              <Heading size={4}>{post.event}</Heading>
            </Box>
            <Box>
              <Heading size={5} fontSize="sm">
                {post.location}
              </Heading>
            </Box>
            <Box>
              <Text>Price: {post.price}</Text>
            </Box>
          </VStack>
        </Box>
        <Box w="25%">
          {contactModalIsOpen && (
            <UserInfoModalWindow
              post={post}
              onClose={() => setContactModalState(false)}
            />
          )}
          {post.traded_with ? (
            <Box bg="#FF3434" p="3" color="white">
              <Text fontSize="s">Sold</Text>
            </Box>
          ) : (
            <Button cursor="pointer" onClick={() => setContactModalState(true)}>
              {" "}
              Contact
            </Button>
          )}
        </Box>
      </HStack>
    </StyledBox>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    event: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    user: PropTypes.number,
    traded_with: PropTypes.number,
  }).isRequired,
};

export default Post;
