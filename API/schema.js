const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const books = [
  {
    id: 0,
    title: "Mobey Dick",
  },
  {
    id: 1,
    title: "Harry Potter",
  },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve(_, args) {
        return books;
      },
    },
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(_, args) {
        return books.find((b) => b.id === args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBook: {
      type: BookType,
      args: {
        title: { type: GraphQLString },
      },
      resolve(_, args) {
        const book = {
          title: args.title,
          id: books.length,
        };

        books.push(book);
        return book;
      },
    },
    editBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        title: { type: GraphQLString },
      },
      resolve(_, args) {
        const index = books.findIndex((b) => b.id === args.id);
        if (index !== -1 && args.title) {
          books[index].title = args.title;
          return books[index];
        }
      },
    },
    deleteBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(_, args) {
        const index = books.findIndex((b) => b.id === args.id);
        if (index !== -1) {
          const el = books.splice(index, 1)[0];
          return el;
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
