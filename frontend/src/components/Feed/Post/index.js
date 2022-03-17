import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import PostModalWindow from "../../PostModal";
import ProfileImage from "../../ProfileImage";
import { StyledBox } from "./style";

function Post({ post }) {
  const [modalIsOpen, setModalState] = useState(false);
  return (
    <StyledBox isTraded={post.traded_with} onClick={() => setModalState(true)}>
      {modalIsOpen && (
        <PostModalWindow post={post} onClose={() => setModalState(false)} />
      )}
      <HStack
        justifyContent="space-between"
        paddingTop="1em"
        paddingBottom="1em"
        paddingRight="1em"
        cursor="pointer"
      >
        <Box width="20%">
          <ProfileImage userId={post.user} />
        </Box>
        <Box w="70%">
          <HStack justify="space-between">
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
            {post.traded_with && (
              <Box bg="#FF3434" p="3" color="white">
                <Text fontSize="s">Sold</Text>
              </Box>
            )}
          </HStack>
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
