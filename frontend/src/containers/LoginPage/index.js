import {
  Box,
  Center,
  Container,
  Heading,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useUserInfoContext } from "../../contexts/UserInfoContext";

const validateSchema = Yup.object({
  email: Yup.string().required().email("Email is not valid").label("Email"),
  password: Yup.string().required().label("Password"),
});

function LogIn() {
  const navigate = useNavigate();
  const userContext = useUserInfoContext();
  return (
    <Center width="100%" height="100vh">
      <Container>
        <Container paddingTop="1em">
          <Formik
            onSubmit={(values, { setErrors }) =>
              // Make a POST request to /users/login/ with email and password to log in
              axios
                .post("/users/login/", {
                  email: values.email,
                  password: values.password,
                })
                .then((response) => {
                  userContext.setCurrentUser(response.data);
                  navigate("/");
                })
                // If something goes wrong, set form errors
                .catch((error) => setErrors(error.response.data))
            }
            initialValues={{}}
            validationSchema={validateSchema}
          >
            {(formProps) => (
              <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
                onSubmit={formProps.handleSubmit}
              >
                <VStack spacing={5} align="stretch">
                  <Box>
                    <Heading>Log in</Heading>
                  </Box>
                  <Box>
                    <Heading size={5}>
                      Please enter email and password to log in.
                    </Heading>
                  </Box>
                  <Box>
                    <InputControl
                      type="email"
                      name="email"
                      placeholder="ola.nordmann@example.com"
                      required
                      label="Email address"
                    />
                  </Box>
                  <Box>
                    <InputControl
                      required
                      name="password"
                      label="Password"
                      inputProps={{
                        type: "password",
                        autoComplete: "password",
                        placeholder: "• • • • • • • •",
                      }}
                    />
                  </Box>
                  <Box textAlign="right">
                    <SubmitButton
                      isLoading={formProps.isSubmitting}
                      isDisabled={!formProps.isValid}
                      style={{ backgroundColor: "#87A8A4", color: "#FFFFFF" }}
                    >
                      Log in
                    </SubmitButton>
                  </Box>
                  <Box textAlign="left">
                    <Text color="#87A8A4">
                      Not a member yet?
                      <Link color="#87A8A4" href="/register">
                        <b> Register!</b>
                      </Link>
                    </Text>
                  </Box>
                </VStack>
              </Box>
            )}
          </Formik>
        </Container>
      </Container>
    </Center>
  );
}

export default LogIn;
