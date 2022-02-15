import {
  Box,
  Center,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  HStack,
  Input,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import "./index.css";

const RegisterUser = () => {
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
          <VStack spacing={5} align="stretch" divider={<Divider spacing={4} />}>
            <Formik
              onSubmit={(values, actions) => {
                console.log(values);
              }}
              initialValues={{}}
            >
              {(props) => (
                <>
                  <Box>
                    <InputControl
                      type="email"
                      name="email"
                      placeholder="ola.nordmann@example.com"
                      required
                      label="Email address"
                    />
                  </Box>
                  <HStack justifyContent="space-between" w="100%">
                    <Box>
                      <InputControl
                        type="text"
                        name="firstName"
                        placeholder="Ola"
                        required
                        label="First name"
                      />
                    </Box>
                    <Box>
                      <InputControl
                        type="text"
                        name="lastName"
                        placeholder="Nordmann"
                        required
                        label="Last name"
                      />
                    </Box>
                  </HStack>
                  <Box>
                    <FormControl name="password" label="Password">
                      <Input
                        type="password"
                        autoComplete="new-password"
                        required
                        placeholder="• • • • • • • •"
                      />
                      <FormHelperText>Create a new password.</FormHelperText>
                    </FormControl>
                  </Box>
                  <Box>
                    <InputControl
                      type="password"
                      name="confirmPassword"
                      placeholder="• • • • • • • •"
                      required
                      helperText="Repeat your password."
                    />
                  </Box>
                  <Box textAlign="right">
                    <SubmitButton
                      isLoading={props.isSubmitting}
                      isDisabled={!props.isValid}
                    >
                      Register user
                    </SubmitButton>
                  </Box>
                </>
              )}
            </Formik>
          </VStack>
        </Container>
      </Container>
    </Center>
  );
};

export default RegisterUser;
