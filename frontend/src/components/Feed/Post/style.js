import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const StyledBox = styled(Box)`
  background-color: ${(props) => (props.isTraded ? "#dfdfdf" : "#ffffff")};
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  border-radius: 3px;
`;
