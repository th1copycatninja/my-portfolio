import React from "react";
import { Box, Text, Button, Center, Image  } from "@chakra-ui/react";
export default function Intro() {
  console.log( window.innerHeight)
  return (
    <Box
     h={{base:window.innerHeight,md:window.innerHeight+"px",md:window.innerHeight,md:window.innerHeight+"px",lg:"625px"}} 
       >
      
      <Box
        w={{  base:'300px',md: "500px", lg: "500px" }}
         margin={{ base: "0px 0px 0px 7px",md:"0px auto" ,lg:"0px auto" }}
  
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
        w={{ base:'300px', md: "500px", lg: "600px" }}
        margin={{ base: "0px 0px 0px -15px",md:"0px auto" ,lg:"0px auto" }} 
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
          margin={{ base: "10px 0px 0px -15px",md:"0px auto" ,lg:"10px auto" }} 
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
        margin={{ base: "20px 0px 0px 10px", md: "15gpx", lg: "15px auto" }}
        w={{ base: "300px", md: "400px", lg: "500px" }}
      >
        {/* <Image
          borderRadius="10px"
          h={{ base: "150px", md: "300px", lg: "300px" }}
          w={{ base: "250px", md: "400px", lg: "500px" }}
          src={require("../../Image/doug.gif")}
          alt="cool cool cool"
        /> */}
      </Box>
   
   
    </Box>
  );
}
