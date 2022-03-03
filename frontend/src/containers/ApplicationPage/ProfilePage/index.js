import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Spacer,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import UserInfo from "../../../components/UserInfo";
import UserInfoImage from "../../../components/UserInfoImage";
import { useCurrentUser } from "../../../contexts/UserInfoContext";

function ProfilePage() {
  const user = useCurrentUser();
  return (
    <HStack margin='"5"' padding='"5"'>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        width="100%"
        height="70vh"
      >
        <Container>
          <Container boxShadow="xs">
            <LinkBox as="editIcon">
              <Flex color="black">
                <Box>
                  <Heading>Personal Info</Heading>
                </Box>
                <Spacer />
                <LinkOverlay href="#">
                  <Box>
                    <EditIcon color="#D0CDC8" />
                  </Box>
                </LinkOverlay>
              </Flex>
              <HStack mb="5">{user && <UserInfo id={user.id} />}</HStack>
            </LinkBox>
          </Container>
          <HStack spacing="24px" mb="5" padding="2" shadow="xs">
            <Box width="100%">
              <Heading size="2">Want to sell</Heading>
              Here your tickets will be available.
            </Box>
          </HStack>
          <HStack mb="5" shadow="xs" padding="2">
            <Box width="100%">
              <Heading size="2">Want to buy</Heading>
              Here tickets you are interested in will appear
            </Box>
          </HStack>
        </Container>
      </VStack>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        width="100%"
        height="70vh"
      >
        <Container boxShadow="xs" p="5">
          <LinkBox as="editIcon">
            {/* <Image
              borderRadius="full"
              boxSize="300px"
              src="https://bit.ly/dan-abramov"
            /> */}
            <UserInfoImage id={user?.id} />
            <Box>
              Change profile picture{" "}
              <LinkOverlay href="#">
                <EditIcon />
              </LinkOverlay>
            </Box>
          </LinkBox>
        </Container>
      </VStack>
    </HStack>
  );
}

export default ProfilePage;
