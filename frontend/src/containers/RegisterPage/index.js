import "./index.css";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Center,
  Container,
  Heading,
  Box,
  VStack,
  StackDivider,
  HStack,
  Button,
} from "@chakra-ui/react";

function RegisterUser() {
  return (
    <Center width="100%" height="100vh">
      <Container>
        <Container>
          <Heading>Register</Heading>
        </Container>
        <Container>
          <Heading size={5}>
            Please enter email and password to create a user.
          </Heading>
        </Container>
        <Container paddingTop="1em">
          <FormControl>
            <VStack spacing={5} align="stretch">
              <Box>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="ola.nordmann@example.com"
                />
              </Box>
              <HStack justifyContent="space-between" w="100%">
                <Box>
                  <FormLabel htmlFor="firstName">First name</FormLabel>
                  <Input id="firstName" type="text" placeholder="Ola" />
                </Box>
                <Box>
                  <FormLabel htmlFor="lastName">Last name</FormLabel>
                  <Input id="lastName" type="text" placeholder="Nordmann" />
                </Box>
              </HStack>
              <Box>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="• • • • • • • •"
                />
                <FormHelperText>Create a new password.</FormHelperText>
              </Box>
              <Box>
                <Input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="• • • • • • • •"
                />
                <FormHelperText>Repeat your password.</FormHelperText>
              </Box>
              <Box textAlign="right">
                <Button>Register user</Button>
              </Box>
            </VStack>
          </FormControl>
        </Container>
      </Container>
    </Center>
  );
}

export default RegisterUser;
