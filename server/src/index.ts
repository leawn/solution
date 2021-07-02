import "reflect-metadata";
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { AppsResolver } from './resolvers/apps';
import { ModelsResolver } from './resolvers/models';
import { ActivitesResolver } from './resolvers/activities';
import { UsageResolver } from './resolvers/usage';

const main = async () => {
    const app = express();

    app.use(json());

    app.use(cors({
        origin: "http://localhost:3000",
        credentials: true
    }));

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [AppsResolver, ModelsResolver, ActivitesResolver, UsageResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res })
    });

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(4000, () => {
        console.log("server started on localhost:4000");
    });
}

main().catch(err => {
    console.log(err);
});