const { gql } = require('apollo-server-express');

const typeDefs = gql`

  scalar Upload

  type Writing {
    id: ID!
    filename: String
    data: String
    contentType: String
    content: String
    title: String
    chapter: String
  }

  type File {
  id: ID!
  content: String!
  }

  type UploadResponse {
  success: Boolean!
  message: String!
  file: File
  }
  
  type User {
    _id: ID
    username: String!
    email: String!
    password: String

  }

  type Auth {
    token: ID
    user: User
  }



  type Query {
    getAllUser: [User]
    getWritings: [Writing]
    getWriting(id: ID!): Writing
  }

   type Mutation {
    uploadTextFile(base64File: String!): UploadResponse!
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;