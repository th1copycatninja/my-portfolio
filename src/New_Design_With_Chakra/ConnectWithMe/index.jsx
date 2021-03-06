import React from "react";
import { Center, Box, HStack, IconButton, VStack } from "@chakra-ui/react";
import { BsGithub,BsLinkedin,BsTwitter } from "react-icons/bs";
export default function ConnectWithMe() {
  return (
    <VStack   h="80px" display={{base:"none",md:"block",lg:"block"}} position={'fixed'} top={[170,200,250]} >
      {/* <Center
        w="20%"
        p={1}
        color="white"
        pos="absolute"
        justifyContent={"space-around"}
      > */}
        <Box justifyContent={"center"} w={[100,200,300]} p={3}>
          <IconButton
            size="sm"
            variant="outline"
            colorScheme="linkedin"
            icon={<BsGithub />}
            onClick={()=> window.open("https://github.com/govind1530")}
          />
        </Box>
        <Box justifyContent={"center"} w={[100,200,300]} p={3}>
        <IconButton
            size="sm"
            variant="outline"
            colorScheme="linkedin"
            icon={<BsLinkedin />}
            onClick={()=> window.open("https://www.linkedin.com/in/govind-maheshwari-75ab32b3/")}
          />
        </Box>
        <Box justifyContent={"center"}w={[100,200,300]} p={3}>
        <IconButton
            size="sm"
            variant="outline"
            colorScheme="linkedin"
            icon={<BsTwitter />}
          />
        </Box>
      {/* </Center> */}
    </VStack>
  );
}
