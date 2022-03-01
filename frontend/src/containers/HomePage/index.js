import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import AddPostPage from "./AddPostPage";
import FeedPage from "./FeedPage";

function HomePage() {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <Header />
      <Routes>
        <Route path="create-post" element={<AddPostPage />} />
        <Route path="" element={<FeedPage />} />
      </Routes>
    </Box>
  );
}

export default HomePage;
