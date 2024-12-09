import {gql} from '@apollo/client';

export const GET_WRITING_BY_ID = gql`
query GetWriting($getWritingId: ID!) {
  getWriting(id: $getWritingId) {
    id
    filename
    data
    contentType
    content
    title
    chapter
  }
}
`

export const GET_ALL_WRITINGS = gql`
query GetWritings {
  getWritings {
    id
    filename
    data
    contentType
    content
    title
    chapter
  }
}`
;