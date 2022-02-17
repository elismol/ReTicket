import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import React from "react";
import * as Yup from "yup";
import "./index.css";
import { Formik } from "formik";
import axios from "axios";

const validateSchema = Yup.object({
  email: Yup.string().required().email("Email is not valid").label("Email"),
  password: Yup.string().required().label("Password"),
});

const LogIn = () => {
  return (
    <Center width="100%" height="100vh">
      <Container>
        <Container paddingTop="1em">
          <Formik
            onSubmit={(values, { setErrors, resetForm }) =>
              // Make a POST request to /users/login/ with email and password to log in
              axios
                .post("/users/login/", {
                  email: values.email,
                  password: values.password,
                })
                // If something goes wrong, set form errors
                .catch((error) => setErrors(error.response.data))
            }
            initialValues={{}}
            validationSchema={validateSchema}
          >
            {(props) => (
              <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
                onSubmit={props.handleSubmit}
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
                      isLoading={props.isSubmitting}
                      isDisabled={!props.isValid}
                    >
                      Log in
                    </SubmitButton>
                  </Box>
                </VStack>
              </Box>
            )}
          </Formik>
        </Container>
      </Container>
    </Center>
  );
};

export default LogIn;
