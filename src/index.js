const { GraphQLServer } = require('graphql-yoga')
const { Graphcool } = require('graphcool-binding')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')

// const resolvers = {
//   Query: {
//     feed(parent, args, ctx, info) {
//       return ctx.db.query.posts({ where: { isPublished: true } }, info)
//     },
//   },
//   Mutation: {
//     createDraft(parent, { title, text }, ctx, info) {
//       return ctx.db.mutation.createPost(
//         // TODO remove `isPublished` in favour of default value
//         { data: { title, text, isPublished: false } },
//         info,
//       )
//     },
//     publish(parent, { id }, ctx, info) {
//       return ctx.db.mutation.updatePost(
//         {
//           where: { id },
//           data: { isPublished: true },
//         },
//         info,
//       )
//     },
//   },
// }

const resolvers = {
  Query,
  Mutation,
  Subscription
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Graphcool({
      typeDefs: 'src/generated/graphcool.graphql',
      endpoint: 'https://graphcool-us1.graphcool.cloud/public-watersnap-ninja-511883/hackernews-node/dev',
      secret: 'mysecret123',
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
