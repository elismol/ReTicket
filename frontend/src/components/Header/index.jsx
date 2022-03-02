import { AddIcon, ChatIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, NavLink as ReactNavLink } from "react-router-dom";
import { useCurrentUser } from "../../contexts/UserInfoContext";
import NavLink from "./NavLink";

const HeaderItems = [
  { href: "/messages", icon: ChatIcon, text: "Messages" },
  { href: "/create-post", icon: AddIcon, text: "New post" },
];
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useCurrentUser();
  const navigate = useNavigate();

  return (
    <Box bg={useColorModeValue("#76b5c5", "blue.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>
            <Text>
              <Link to="/" as={ReactNavLink} color="white">
                ReTicket
              </Link>
            </Text>
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {HeaderItems.map(({ href, icon, text }) => (
              <NavLink key={href} icon={icon} href={href} text={text} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          {user ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar size="sm" src="/logo.png" />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button onClick={() => navigate("/login")}>Log in</Button>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {HeaderItems.map((href, icon, text) => (
              <NavLink key={href} href={href} icon={icon} text={text} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
