export const LIST_PROJECTS = gql(`query {
    projects {
      data {
        id
        attributes {
          title
        }
      }
    }
  }`)
  
  export const SINGLE_PROJECT = gql(`query ($projectId: string!) {
    projects(filters: {id: {eq: $projectId}}) {
      data {
        id
        attributes {
          title
          description
          body
        }
      }
    }
  }`)
  
  export const LIST_ID = gql(`query {
    projects {
      data {
        id
      }
    }
  }`)