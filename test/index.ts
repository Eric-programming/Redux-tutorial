import { GraphQLClient, request } from "graphql-request";
import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  GET_BOOK,
  GET_BOOKS,
} from "./graphql";
const endpoint = "http://localhost:4000/";

const graphQLClient = new GraphQLClient(endpoint);
try {
  //GET ALL
  graphQLClient.request(GET_BOOKS).then((res) => {
    console.log("Get all books", res);
  });
  //GET Sinle Book
  graphQLClient.request(GET_BOOK, { Id: 1 }).then((res) => {
    console.log("Get single book", res);
  });

  //ADD
  graphQLClient.request(ADD_BOOK, { bookTitle: "Hello" }).then((res) => {
    console.log("Book added", res);
  });
  //UPDATE
  graphQLClient
    .request(EDIT_BOOK, { Id: 2, bookTitle: "Hello2" })
    .then((res) => {
      console.log("Book edited", res);
    });
  //DELETE
  graphQLClient.request(DELETE_BOOK, { Id: 1 }).then((res) => {
    console.log("Book Deleted", res);
  });
  graphQLClient.request(GET_BOOKS).then((res) => {
    console.log("Get all books", res);
  });
} catch (error) {
  console.error("Error fetch \n", error);
}
