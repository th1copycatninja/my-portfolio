import React from "react";
import { Box, Container, Text, Button, Center, Image } from "@chakra-ui/react";
export default function Intro() {
  return (
    <Container
     h={[630, 630, 630]} p={[5, 10, 15]} w={'100%'}>
      <Box
        w={{ base: "350px", md: "500px", lg: "600px" }}
        margin={{ base: "5px" }}
        flex='1'
      >
        <Text
          textAlign={"center"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "30px", md: "34px", lg: "48px" }}
          fontWeight="extrabold"
        >
          Govind Maheshwari
        </Text>
      </Box>
      <Box
        w={{ base: "300px", md: "500px", lg: "600px" }}
        margin={{
          base: "5px 0px 0px 5px",
          md: "0px 0px 0px 0px",
          lg: "-10px 0px 0px 0px",
        }}
      >
        <Text
          textAlign={"center"}
          bgClip="text"
          fontSize={{ base: "24px", md: "33px", lg: "40px" }}
          fontWeight="extrabold"
          color="#FFFFFF"
        >
          Full Stack Developer.
        </Text>
      </Box>
      <Center
        margin={{ base: "7px", md: "7px", lg: "15px auto" }}
        w={{ base: "140px", md: "400px", lg: "500px" }}
      >
        <Button
          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
          colorScheme="telegram"
        >
          Resume
        </Button>
      </Center>
      <Box
        margin={{ base: "20px 0px 0px 30px", md: "15gpx", lg: "15px auto" }}
        w={{ base: "300px", md: "400px", lg: "500px" }}
      >
        <Image
          borderRadius="10px"
          h={{ base: "200px", md: "300px", lg: "300px" }}
          w={{ base: "250px", md: "400px", lg: "500px" }}
          src={require("../../Image/doug.gif")}
          alt="cool cool cool"
        />
      </Box>
    </Container>
  );
}
