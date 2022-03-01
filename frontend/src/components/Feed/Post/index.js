import { ChatIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import ProfileImage from "../../ProfileImage";
import { StyledBox } from "./style";

function Post({ post }) {
  return (
    <StyledBox>
      <HStack
        justifyContent="space-between"
        paddingTop="1em"
        paddingBottom="1em"
      >
        <Box width="20%">
          <ProfileImage userId={post.user} />
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
        <Box w="10%">
          <ChatIcon />
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
  }).isRequired,
};

export default Post;
