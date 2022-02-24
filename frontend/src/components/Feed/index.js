import { Container, StackDivider, VStack } from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import Post from "./Post";

function Feed({ type }) {
  const [posts, setPosts] = React.useState(undefined);
  React.useEffect(
    function getPosts() {
      axios
        .get(`/posts/?post_type=${type}`)
        .then((response) => setPosts(response.data));
    },
    [type]
  );
  return (
    <Container overflowY="auto" height="100%">
      {posts === undefined ? (
        "Loading...."
      ) : (
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </VStack>
      )}
    </Container>
  );
}

Feed.propTypes = {
  type: PropTypes.oneOf(["BUYING", "SELLING"]).isRequired,
};

export default Feed;
