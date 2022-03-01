import { Icon, Link, useColorModeValue } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { NavLink as ReactNavLink } from "react-router-dom";

function NavLink({ href, icon, text }) {
  return (
    <Link
      to={href}
      as={ReactNavLink}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("green.200", "green.700"),
      }}
    >
      <Icon as={icon} />
      <span style={{ marginLeft: "10px" }}>{text}</span>
    </Link>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
};

export default NavLink;
