import { Field, ObjectType, Query, Resolver } from "type-graphql";
import { sleep } from "../util/sleep";

@ObjectType()
class ModelTarget {
    @Field()
    model?: string;

    @Field()
    runtime?: string;

    @Field()
    version?: string;
}

@ObjectType()
class AppsPlatformsInfo {
    @Field()
    id?: string;

    @Field()
    platform?: string;

    @Field(() => ModelTarget, { nullable: true })
    modelTarget?: ModelTarget;
}

@ObjectType()
class AppsInfo {
    @Field()
    id?: string;

    @Field()
    name?: string;

    @Field()
    deviceCount?: number;

    @Field(() => [AppsPlatformsInfo])
    platforms: AppsPlatformsInfo[] | [];
}

@ObjectType()
class Apps {
    @Field(() => [AppsInfo], { nullable: true })
    apps?: AppsInfo[]
}

@Resolver()
export class AppsResolver {
    @Query(() => Apps)
    async apps() {
        await sleep(3000);
        return {
            apps: [
            {
              "id": "1c6f1680-e468-471a-9217-ac4bef8c037e",
              "name": "Wakeup word detection",
              "deviceCount": 51,
              "platforms": [
                {
                  "id": "eabcb303-12f4-4f87-9971-0b78da8b9261",
                  "modelTarget": {
                    "model": "Bird-Feeder",
                    "runtime": "apple",
                    "version": "Sparrow"
                  },
                  "platform": "ios"
                },
                {
                  "id": "e8ea8dd8-7edf-4bcf-9108-e0acb0f8dcc5",
                  "modelTarget": {
                    "model": "ios-face-detect",
                    "runtime": "linux",
                    "version": "5193203"
                  },
                  "platform": "raspberry"
                }
              ]
            },
            {
              "id": "1c6f1680-e468-471a-9217-ac4bef8c037d",
              "name": "Test App",
              "deviceCount": 822,
              "platforms": []
            },
            {
              "id": "1c6f1680-e468-471a-9217-ac4bef8c037b",
              "name": "Office Christmas Cam",
              "deviceCount": 26,
              "platforms": []
            },
            {
              "id": "1c6f1680-e468-471a-9217-ac4bef8c037a",
              "name": "Sample Application",
              "deviceCount": 2,
              "platforms": [
                {
                  "id": "babf9ab4-e829-4c85-a930-ff5c91125850",
                  "modelTarget": {
                    "model": "Bird-Feeder",
                    "runtime": "apple",
                    "version": "Sparrow"
                  },
                  "platform": "ios"
                },
                {
                  "id": "cd37cfbf-1d00-4645-b6b4-b3015e44ef8f",
                  "modelTarget": {
                    "model": "GPT3",
                    "runtime": "google",
                    "version": "conversation"
                  },
                  "platform": "android"
                }
              ]
            }
          ]
        }
    }
}