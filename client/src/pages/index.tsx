import { Box, Flex } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { Applications } from "../components/Applications";
import LatestActivity from '../components/LatestActivity';
import LimitsAndUsage from '../components/LimitsAndUsage';
import { Models } from "../components/Models";
import { NavBar } from "../components/NavBar";
import { useAppsQuery, useModelsQuery } from '../generated/graphql';
import { createUrqlClient } from '../util/createUrqlClient';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { getActivities } from '../util/getActivities';
import { getUsage } from "../util/getUsage";


const Index = ({activities, usage}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [{ data: appsData, fetching: appsFetching }] = useAppsQuery();
    const [{ data: modelsData, fetching: modelsFetching }] = useModelsQuery();
    
    return (
        <Box w="100%" h="100vh">
            <NavBar />
            <Flex>
                <Box p={4} w="30%">
                    <LimitsAndUsage data={usage} />
                    <LatestActivity data={activities} />
                </Box>
                <Box p={4} w="70%">
                    <Models data={modelsData} isLoading={modelsFetching} />
                    <Applications data={appsData} isLoading={appsFetching}/>
                </Box>
            </Flex>
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const [usage, activities] = await Promise.all([getUsage(), getActivities()])
    return {
        props: {
            activities,
            usage
        }
    }
}

export default withUrqlClient(createUrqlClient, { ssr: false })(Index);