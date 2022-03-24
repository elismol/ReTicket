import { Container } from "@chakra-ui/react";
import styled from "styled-components";

export const BigProfileImage = styled(Container)`
  width: 300px;
  height: 300px;
  background-image: url("http://localhost:8000${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
`;
