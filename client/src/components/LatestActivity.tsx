import { Box, Heading, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import React from 'react';
import { ActivitiesQuery } from '../generated/graphql';

interface LatestActivityProps {
    data: ActivitiesQuery;
}

const LatestActivity: React.FC<LatestActivityProps> = ({ data }) => {
        return (
            <Box p={4} rounded="md" border="2px" borderColor="lightgray" mb={4} boxShadow="md">
                <Heading size="lg" mb={8}>Latest Activity</Heading>
                <UnorderedList mb={6} ml={8} mr={6}>
                    {data?.activites?.activities?.map(l => (
                        <ListItem key={l.date}>
                            <Text fontWeight="medium">{l.desc} - </Text>
                            
                            <Text as="i">{l.date}</Text>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        );
}

export default LatestActivity;