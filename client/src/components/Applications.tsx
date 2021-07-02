import { Box, Heading, ListItem, Text, UnorderedList, Center, Flex, Wrap, WrapItem, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { AppsQuery } from '../generated/graphql';

interface ApplicationsProps {
  data?: AppsQuery | undefined;
  isLoading?: boolean;
}

const dummySkeletons = ["1", "2", "3", "4"];

export const Applications: React.FC<ApplicationsProps> = ({data, isLoading}) => {
        return (
            <Box p={4} rounded="md" border="2px" borderColor="lightgray" mb={4} boxShadow="md">
                <Heading size="lg" mb={8}>Application</Heading>
                { !isLoading && data ? (
                    <Wrap w="100%" justify="center">
                    {data?.apps?.apps?.map(a => (
                        <WrapItem
                            w="49%"
                            rounded="md"
                            border="2px"
                            borderColor="lightgray"
                            boxShadow="md"
                            key={a.id}
                        >
                        <Box mb={6} p={4}>
                            <Heading mb={1} size="md">{a.name}</Heading>
                            <Text color="gray.500" fontSize="sm" mb={4}>
                                {a.id}
                            </Text>
                            {a?.platforms?.length > 0 ? (
                            <Box>
                                <Heading size="sm" mb={2}>Platforms</Heading>
                                <UnorderedList ml={8}>
                                    {a.platforms.map(p => (
                                        <ListItem key={p.id}>{p.platform} - {p.modelTarget?.runtime} / {p.modelTarget?.model} / {p.modelTarget?.version}</ListItem>
                                    ))}
                                </UnorderedList>
                            </Box>
                            ) : (
                            <Text>No data</Text>
                            )}
                        </Box>
                    </WrapItem>
                    ))}
                </Wrap>
                ) : (
                    <Wrap w="100%" justify="center">
                    {dummySkeletons.map(d => (
                        <WrapItem w="49%" key={d} h="200px">
                            <Skeleton w="100%" h="200px"/>
                        </WrapItem>
                    ))}
                </Wrap>
                )
                }
            </Box>
        );
}