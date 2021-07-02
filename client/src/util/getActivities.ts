import { client } from "./client";
import { sleep } from "../util/sleep";

const ACTIVITIES_QUERY =`
query Activities {
    activites {
      activities {
        date
        desc
        type
      }
    }
  }`;


export const getActivities = async () => {
    await sleep(3000);
    const { data: activitiesData } = await client.query(ACTIVITIES_QUERY).toPromise();

    return activitiesData;
}