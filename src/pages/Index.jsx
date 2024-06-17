import { Container, Text, VStack, Box, Heading, Link, Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchNews from "../utils/newsFetcher";
import rankNews from "../utils/newsRanker";

const Index = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews();
      const rankedNews = rankNews(news);
      setNewsItems(rankedNews);
    };
    getNews();
  }, []);
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Today ChatGPT read 1000 top news stories and ranked them based on significance.</Heading>
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
          <Heading size="md" color="white">Top News</Heading>
          <Text color="gray.400">Stories ranked by significance</Text>
          <Box mt={4}>
            {newsItems.map(item => (
              <Text key={item.link} color="white">
                [{item.significance.toFixed(1)}] {item.title} ({item.source}) <Text as="span" color="gray.400">{item.pubDate}</Text>
              </Text>
            ))}
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;