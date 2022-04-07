// DATA RECEIVED

export interface IGetRepository {
  __typename: "Repository"
  issue: IGetIssue
}
export interface IGetIssue {
  __typename: "Issue"
  id: string
  author: IGetAuthor
  createdAt: string
  state: "OPEN" | "CLOSED"
  title: string
  bodyHTML: string
  comments: IGetComments
}
export interface IGetComments {
  __typename: "IssueCommentConnection"
  totalCount: number
  nodes: IGetIssueComment[]
}
export interface IGetIssueComment {
  __typename: "IssueComment"
  createdAt: string
  body: string
  author: IGetAuthor
}
export interface IGetAuthor {
  __typename: "User"
  login: string
  avatarUrl: string
}

// DATA TRANSFORMED

export interface IIssue {
  id: string
  state: "OPEN" | "CLOSED"
  title: string
  bodyHTML: string
  comments: IComments
  author: IAuthor
  created: string
}

export interface IComments {
  totalCount: number
  comments: IComment[]
}
export interface IComment {
  created: string
  author: IAuthor
  bodyHTML: string
}
export interface IAuthor {
  login: string
  avatar: string
}