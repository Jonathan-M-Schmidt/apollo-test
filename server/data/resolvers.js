const resolvers = {
    Query: {
      hello(root, args, context) {
        return "Hello world!"
      },
    },
};
  
export default resolvers;