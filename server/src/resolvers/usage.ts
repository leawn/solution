import { Query, Resolver, ObjectType, Field } from 'type-graphql';

@ObjectType()
class UsageInfoProperties {
    @Field()
    limit?: number;

    @Field()
    usage?: number;
}

@ObjectType()
class UsageInfo {
    @Field(() => UsageInfoProperties, { nullable: true })
    Models: UsageInfoProperties;

    @Field(() => UsageInfoProperties, { nullable: true })
    Apps: UsageInfoProperties;

    @Field(() => UsageInfoProperties, { nullable: true })
    Devices: UsageInfoProperties;
}

@ObjectType()
class Usage {
  @Field(() => UsageInfo, { nullable: true })
  usage: UsageInfo;
}

@Resolver()
export class UsageResolver {
    @Query(() => Usage)
    usage() {
        return {
            usage: {
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
            }
        }
    }
}