import { ChatIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ProfileImage from "../../ProfileImage";

const Post = ({ post }) => {
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
};

export default Post;
