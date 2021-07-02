import { Avatar, Box, Flex, Spacer, Icon, Link } from '@chakra-ui/react';
import React from 'react'

interface NavBarProps {}

interface CircleIconProps {
    boxSize?: number;
}

const CircleIcon: React.FC<CircleIconProps> = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

export const NavBar: React.FC<NavBarProps> = ({}) => {
        return (
            <Box bg="lightgray" px={4} mb={6}>
                <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
                    <Box ml={2}>
                        <CircleIcon boxSize={9} />
                    </Box>
                    <Spacer />
                    <Box>
                        <Link href="#">Menu1</Link>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link href="#">Menu2</Link>
                    </Box>
                    <Spacer />
                    <Avatar size="sm" mr={2}/>
                </Flex>
            </Box>
        );
}