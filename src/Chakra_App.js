import React from 'react'
import {useColorMode} from '@chakra-ui/react'
import Intro from './New_Design_With_Chakra/Intro/Intro'
import ConnectWithMe from './New_Design_With_Chakra/ConnectWithMe'
export default function Chakra_App() {
  const {colorMode} =useColorMode()
  console.log(colorMode)
  return (
    <div
      style={{
        backgroundColor: "#242B2E" ,
        color: "#fff" ,
      }}
    >
        <ConnectWithMe/>
        <Intro/>
        

        
        </div>
  )
}
