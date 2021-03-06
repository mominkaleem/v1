import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("purple.100", "gray.900")}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        margin={"2"}
      >
        <Avatar
          size={"xl"}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          src="https://pbs.twimg.com/profile_images/1548399412061212672/9Rq84t8a_400x400.jpg"
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          mo
        </Heading>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Creator of Confer
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            1 ETH
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.300"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            <Link href="https://cal.com/momin/30min" target="_blank">
              Book
            </Link>
          </Button>

          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"yellow.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "yellow.500",
            }}
            _focus={{
              bg: "yellow.500",
            }}
          >
            <Link
              href="https://thirdweb.com/dashboard/rinkeby/0x8A9868B6B6c48F02bA2182cebB8Fd0AD3cECf6E0/"
              target="_blank"
            >
              Deposit
            </Link>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
