import { gql } from "graphql-request";

export const GET_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBookFunction($bookTitle: String!) {
    addBook(title: $bookTitle) {
      id
      title
    }
  }
`;

export const EDIT_BOOK = gql`
  mutation EditBookFunction($Id: Int!, $bookTitle: String!) {
    editBook(id: $Id, title: $bookTitle) {
      id
      title
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBookFunction($Id: Int!) {
    deleteBook(id: $Id) {
      id
      title
    }
  }
`;

export const GET_BOOK = gql`
  query GetBook($Id: Int!) {
    book(id: $Id) {
      id
      title
    }
  }
`;
