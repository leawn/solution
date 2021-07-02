import { Box, Heading, Select, Table, Tbody, Td, Badge, Th, Thead, Tr, Stack, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { ModelsQuery } from '../generated/graphql';

interface ModelsProps {
  data?: ModelsQuery | undefined;
  isLoading?: boolean;
}

export const Models: React.FC<ModelsProps> = ({data, isLoading}) => {
        return (
            <Box p={4} rounded="md" border="2px" borderColor="lightgray" mb={4} boxShadow="md">
                <Heading size="lg" mb={8}>Models</Heading>
                { !isLoading && data ? (
                    <Table mb={6} colorScheme="gray" variant="simple" size="md">
                    <Thead bgColor="lightgray">
                        <Tr>
                        <Th>Name</Th>
                        <Th>Source</Th>
                        <Th>Tags</Th>
                        <Th>Versions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.models?.models?.map(m => (
                            <Tr key={m.id}>
                            <Td>{m.name}</Td>
                            <Td>{m.source}</Td>
                            <Td>
                                <Stack direction="row">
                                    {m.tags.map(t => (
                                        <Badge key={t}>{t}</Badge>
                                    ))}
                                </Stack>
                            </Td>
                            <Td>
                                <Select placeholder="Select">
                                    {m.versions.map(v => (
                                        <option key={v.name} value={v.name}>{v.name}</option>
                                    ))}
                                </Select>
                            </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                ) : (
                    <Box w="100%" mb={6} p={1}>
                        <Skeleton w="100%" h="400px"/>
                    </Box>
                )}
            </Box>
        );
}