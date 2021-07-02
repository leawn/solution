import { Box, Heading, Progress, Text, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { UsageQuery } from '../generated/graphql';

interface LimitsAndUsageProps {
    data: UsageQuery | undefined;
}

const usage = {
    "Models": {
      "limit": 10,
      "usage": 6
    },
    "Apps": {
      "limit": 20,
      "usage": 10
    },
    "Devices": {
      "limit": 50,
      "usage": 45
    }
};

const percentageCalc = (a: any, b: any) : any => {
    return Math.round(a/b * 100);
}

const LimitsAndUsage: React.FC<LimitsAndUsageProps> = ({ data }) => {
        // @ts-ignore
        const entries = Object.entries(data?.usage?.usage);
        const elem = entries.map(e => {
            // @ts-ignore
            let used = e[1]["usage"]; // ts doesn't like ["string"] type of accessing properties
            // @ts-ignore
            let total = e[1]["limit"];
            let v = percentageCalc(used, total);
            return (
            <Box mb={6} key={e[0]}>
            <Flex mb={2}>
                <Heading size="md">{e[0]}</Heading>
                <Spacer />
                <Text mr={2} color="gray.500">{used} / {total}</Text>
            </Flex>
            <Flex mb={2}>
                <Progress
                    w="80%"
                    rounded="md"
                    colorScheme= {
                        v <= 50 ? "green" :
                        v <= 75 ? "yellow" :
                        "red"
                    }
                    size="md"
                    value={v}
                />
                <Spacer />
                <Text
                    mr={2}
                    fontWeight="bold"
                >
                    {v}
                </Text>
            </Flex>
            </Box>
            )
        })
        return (
            <Box p={4} rounded="md" border="2px" borderColor="lightgray" mb={4} boxShadow="md">
                <Heading size="lg" mb={8}>Limits and Usage</Heading>
                { !data ? (
                    <Box></Box>
                ) : (
                    elem
                )}
            </Box>
        );
}

export default LimitsAndUsage;