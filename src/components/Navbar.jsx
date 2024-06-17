import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.900" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          News Minimalist
        </Text>
        <Spacer />
        <Link href="/" px={2}>
          Home
        </Link>
        <Link href="/about" px={2}>
          About
        </Link>
        <Link href="/faq" px={2}>
          FAQ
        </Link>
        <Link href="/premium" px={2}>
          Premium
        </Link>
        <Link href="/newsletter" px={2}>
          Newsletter
        </Link>
        <Link href="/signin" px={2}>
          Sign in
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;