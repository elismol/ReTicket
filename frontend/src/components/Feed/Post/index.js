import { ChatIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import ProfileImage from "../../ProfileImage";

function Post({ post }) {
  return (
    <Box bg="#FFFFFF">
      <HStack justifyContent="space-between">
        <Box width="30%">
          <ProfileImage userId={post.user} />
        </Box>
        <Box w="60%">
          <VStack alignItems="left">
            <Box>
              <Heading size={4}>{post.event}</Heading>
            </Box>
            <Box>
              <Heading size={5}>{post.location}</Heading>
            </Box>
            <Box>
              <Text>Price: {post.price}</Text>
            </Box>
          </VStack>
        </Box>
        <Box w="10%">
          <ChatIcon />
        </Box>
      </HStack>
    </Box>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    event: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    user: PropTypes.number,
  }).isRequired,
};

export default Post;
