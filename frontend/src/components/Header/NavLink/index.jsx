import PropTypes from "prop-types";
import { Icon, Link, useColorModeValue } from "@chakra-ui/react";

function NavLink({ href, icon }) {
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
    >
      <Icon as={icon} />
    </Link>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.elementType,
};

export default NavLink;
