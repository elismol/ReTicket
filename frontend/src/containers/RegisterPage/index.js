import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import React, { useState } from "react";
import * as Yup from "yup";
import "./index.css";
import axios from "axios";

const validationSchema = Yup.object({
  email: Yup.string().required().email("Email is not valid").label("Email"),
  first_name: Yup.string().required().label("First name"),
  last_name: Yup.string().required().label("Last name"),
  password: Yup.string().required().label("Password"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both passwords need to be the same"
    ),
  }),
});

const RegisterUser = () => {
  const registerUser = React.useCallback((formValues) => {
    return axios.post("/users/", formValues);
  }, []);

  return (
    <Center width="100%" height="100vh">
      <Container>
        <Container paddingTop="1em">
          <Formik
            onSubmit={(values, { setErrors, resetForm }) =>
              registerUser(values).catch((error) =>
                setErrors(error.response.data)
              )
            }
            initialValues={{}}
            validationSchema={validationSchema}
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
                    <Heading>Register</Heading>
                  </Box>
                  <Box>
                    <Heading size={5}>
                      Please enter email and password to create a user.
                    </Heading>
                  </Box>
                  {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
                  {console.log(props)}
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
                        name="first_name"
                        placeholder="Ola"
                        required
                        label="First name"
                      />
                    </Box>
                    <Box>
                      <InputControl
                        type="text"
                        name="last_name"
                        placeholder="Nordmann"
                        required
                        label="Last name"
                      />
                    </Box>
                  </HStack>
                  <Box>
                    <InputControl
                      required
                      name="password"
                      label="Password"
                      inputProps={{
                        type: "password",
                        autoComplete: "new-password",
                        placeholder: "• • • • • • • •",
                      }}
                      helperText="Create a new password."
                    />
                  </Box>
                  <Box>
                    <InputControl
                      required
                      name="confirmPassword"
                      inputProps={{
                        type: "password",
                        autoComplete: "new-password",
                        placeholder: "• • • • • • • •",
                      }}
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
                </VStack>
              </Box>
            )}
          </Formik>
        </Container>
      </Container>
    </Center>
  );
};

export default RegisterUser;
