import { Query, Resolver, ObjectType, Field } from 'type-graphql';
import { sleep } from '../util/sleep';


@ObjectType()
class VersionsInfo {
    @Field()
    name?: string;
}

@ObjectType()
class ModelsInfo {
    @Field()
    id?: string;

    @Field()
    name?: string;

    @Field()
    source?: string;
    
    @Field(() => [String])
    tags: string[] | [];

    @Field(() => [VersionsInfo])
    versions: VersionsInfo[] | []
}

@ObjectType()
class Models {
    @Field(() => [ModelsInfo], { nullable: true })
    models?: ModelsInfo[]
}

@Resolver()
export class ModelsResolver {
    @Query(() => Models)
    async models() {
        await sleep(3000);
        return {
            models: [
                {
                  "id": "fe5d2ecd-ee5a-4f4d-90fd-987d2e118b01",
                  "name": "GPT3",
                  "source": "github",
                  "tags": [
                    "gpt2",
                    "lm-head",
                    "causal-lm",
                    "exbert"
                  ],
                  "versions": [
                    {
                      "name": "generate-code"
                    },
                    {
                      "name": "conversation"
                    },
                    {
                      "name": "blog-posts"
                    }
                  ]
                },
                {
                  "id": "9c39c9e9-2cd0-48f8-a91b-e0dde509355c",
                  "name": "Drone-object-detection",
                  "source": "gitlab",
                  "tags": [
                    "drones",
                    "image"
                  ],
                  "versions": [
                    {
                      "name": "humans"
                    },
                    {
                      "name": "cars"
                    },
                    {
                      "name": "boats"
                    }
                  ]
                },
                {
                  "id": "b7725327-f37d-4100-add0-10ec452b3bf8",
                  "name": "Bird-Feeder",
                  "source": "apple",
                  "tags": [
                    "animal",
                    "bird",
                    "detection"
                  ],
                  "versions": [
                    {
                      "name": "Sparrow"
                    },
                    {
                      "name": "Lovebird"
                    },
                    {
                      "name": "parrot"
                    }
                  ]
                },
                {
                  "id": "c03059b8-c032-4ca1-87db-e254fd1b910d",
                  "name": "Facenet",
                  "source": "mobile",
                  "tags": [
                    "CNN",
                    "detection"
                  ],
                  "versions": [
                    {
                      "name": "marine-objects"
                    },
                    {
                      "name": "bacteria"
                    },
                    {
                      "name": "cars-28db25b"
                    }
                  ]
                },
                {
                  "id": "a5895d95-f5b8-45ea-9238-cb9b35e00652",
                  "name": "ios-face-detect",
                  "source": "google",
                  "tags": [
                    "quality-focused",
                    "bike",
                    "exe",
                    "radial"
                  ],
                  "versions": [
                    {
                      "name": "382ace"
                    },
                    {
                      "name": "5193203"
                    },
                    {
                      "name": "232cef9"
                    }
                  ]
                }
            ]
        }
    }
}