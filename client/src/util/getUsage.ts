import { client } from "./client";
import { sleep } from "../util/sleep";

const USAGE_QUERY = `
query Usage {
  usage {
    usage {
      Models {
        limit
        usage
      }
      Apps {
        limit
        usage
      }
      Devices {
        limit
        usage
      }
    }
  }
}`;

export const getUsage = async () => {
    await sleep(3000);
    const { data: usageData } = await client.query(USAGE_QUERY).toPromise();

    return usageData;
}