import PropTypes from "prop-types";
import { Link, useColorModeValue } from "@chakra-ui/react";

function NavLink({ href }) {
  return (
    <Link
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("green.200", "green.700"),
      }}
      href={href}
    />
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default NavLink;
