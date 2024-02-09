import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-polls";
import { voteOnPoll } from "./routes/vote-on-polls";
import cookie from "@fastify/cookie";
import { fastifyWebsocket } from "@fastify/websocket";
import { pollResults } from "./ws/poll-results";

const app = fastify();

app.register(cookie, {
    secret: "polls-app-nlw", // não deixa o usuário alterar o cookie, tipo uma assinatura criada pela própria aplicação
    hook: "onRequest", 
    parseOptions: {}
});
app.register(fastifyWebsocket)

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);
app.register(pollResults);

app.listen({port: 3333})
    .then(() => {
        console.log("HTTP server running!");
});