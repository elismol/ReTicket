import { Box } from "@chakra-ui/react";
import Header from "../../components/Header";
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
      <FeedPage />
    </Box>
  );
}

export default HomePage;
