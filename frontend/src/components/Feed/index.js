import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import Post from "./Post";

function Feed({ type }) {
  const [posts, setPosts] = React.useState(undefined);
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(
    function getPosts() {
      axios
        .get(`/posts/?post_type=${type}`)
        .then((response) => setPosts(response.data));
    },
    [type]
  );
  const filteredPosts = React.useMemo(
    () =>
      posts?.filter(
        (post) =>
          post.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.location.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [posts, searchTerm]
  );
  return (
    <Container overflowY="auto" height="100%">
      {posts === undefined ? (
        "Loading...."
      ) : (
        <VStack spacing={4} align="stretch">
          <InputGroup>
            <Input
              width="100%"
              align="center"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              bg="white"
            />
            <InputRightElement>
              <SearchIcon color="gray.400" />
            </InputRightElement>
          </InputGroup>
          {filteredPosts.map((post) => (
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
