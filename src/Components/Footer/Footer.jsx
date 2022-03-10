import { Icon } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"
import {BsFillHeartFill} from 'react-icons/bs'
export default function Footer() {
  return (
    <div className="f-container">
        <div>
          {`Copyright (c) ${new Date().getFullYear()} Govind Maheshwari`}
        </div>
        <div>
           <span>Made with</span> <Icon  as={BsFillHeartFill} w={20} h={13} />
        </div>
    </div>
  )
}
