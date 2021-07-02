import { Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class ActivitiesInfo {
    @Field()
    date?: string;

    @Field()
    desc?: string;

    @Field()
    type?: string; // can actually specify "create" / "delete" / "update" / "read" / etc.
}

@ObjectType()
class Activities {
    @Field(() => [ActivitiesInfo], { nullable: true })
    activities: ActivitiesInfo[];
}

@Resolver()
export class ActivitesResolver {
    @Query(() => Activities)
    activites() {
        return {
            activities: [
                {
                  "date": "2020-12-29 03:01:22",
                  "desc": "New model has been uploaded `Model XXX`",
                  "type": "create"
                },
                {
                  "date": "2020-12-29 05:20:49",
                  "desc": "New Runtime has been added to model `Model XXX` - `coreml`",
                  "type": "update"
                },
                {
                  "date": "2020-12-30 11:39:57",
                  "desc": "New API key has been created",
                  "type": "read"
                },
                {
                  "date": "2020-12-30 11:54:51",
                  "desc": "New device has been registered to system `My Iphone`",
                  "type": "create"
                },
                {
                  "date": "2020-12-30 12:02:28",
                  "desc": "Device has been deleted from system `My Iphone`",
                  "type": "delete"
                }
            ]
        }
    }
}