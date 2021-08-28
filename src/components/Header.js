import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Box, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Image } from "@chakra-ui/react"
import React from 'react'

function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode == "dark";
    const {isNotSmallerScreen} = useMediaQuery("min-width:600px");
    return (
        <Stack>
            <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                <Text textAlign='center' fontWeight="semibold" color="cyan.400" fontFamily="poppins" fontSize="4xl" >Hi, I am</Text>
                <Text textAlign='center'  fontSize="6xl" color="facebook.100"  ><i>JANRITZ BANTOLO CABANSAG</i></Text>
                <Image src="picture.jpg" alt="Segun Adebayo" />
            </Box>

        </Stack>
    )
}

export default Header
