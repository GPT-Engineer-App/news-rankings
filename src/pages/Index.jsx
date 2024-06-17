import { Container, Text, VStack, Box, Heading, Link, Flex, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Today ChatGPT read 1186 top news stories and gave 9 of them a significance score over 5.5.</Heading>
        <Text>Read their summaries in <Link color="blue.500" href="/newsletter">daily newsletter</Link>.</Text>
        <Box width="100%" bg="gray.700" p={4} borderRadius="md">
          <Text color="white">Personal feed</Text>
          <Flex>
            <Link href="#" color="blue.300" px={2}>All</Link>
            <Link href="#" color="blue.300" px={2}>World</Link>
            <Link href="#" color="blue.300" px={2}>Nation</Link>
            <Link href="#" color="blue.300" px={2}>Business</Link>
            <Link href="#" color="blue.300" px={2}>Technology</Link>
            <Link href="#" color="blue.300" px={2}>Science</Link>
            <Link href="#" color="blue.300" px={2}>Health</Link>
            <Link href="#" color="blue.300" px={2}>Entertainment</Link>
            <Link href="#" color="blue.300" px={2}>Sports</Link>
            <Link href="#" color="blue.300" px={2}>General</Link>
          </Flex>
        </Box>
        <Box width="100%" bg="gray.800" p={4} borderRadius="md">
          <Heading size="md" color="white">New (20 + 18)</Heading>
          <Text color="gray.400">Stories from the past 24 hours</Text>
          <Box mt={4}>
            <Text color="white">[5.0] SpaceX Starlink satellites may harm ozone layer (Quartz + 2) <Text as="span" color="gray.400">&lt;1h</Text></Text>
            <Text color="white">[5.1] Paris loses top equity market spot to London after $258bn drop (The Guardian) <Text as="span" color="gray.400">&lt;1h</Text></Text>
            <Text color="white">[5.4] ChatGPT analyzes PDFs for free, offering quick summaries (ReadWrite) <Text as="span" color="gray.400">2h</Text></Text>
            <Text color="white">[5.3] Fathers' pre-conception diet may impact children's health: study (KRDO) <Text as="span" color="gray.400">3h</Text></Text>
            <Text color="white">[5.0] Adobe enhances Acrobat with Firefly AI for smarter PDFs (TechRadar) <Text as="span" color="gray.400">4h</Text></Text>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;