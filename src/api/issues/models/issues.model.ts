// QUERY (DATA RECEIVED)

export interface IGetIssues {
  search: {
    __typename: "SearchResultItemConnection";
    issueCount: number;
    nodes: IGetIssuesSearchIssue[]
  }
}
export interface IGetIssuesVars {
  query: string
}
export interface IGetIssuesSearchIssue {
  __typename: "Issue";
  title: string;
  state: "OPEN" | "CLOSED";
  number: number;
  comments: {
    __typename: "IssueCommentConnection";
    totalCount: number
  };
  labels: {
    __typename: "LabelConnection";
    nodes: IGetIssuesSearchIssueLabel[];
  }
}
export interface IGetIssuesSearchIssueLabel {
  __typename: "Label";
  name: string;
  color: string;
}


// DATA TRANSFORMED

export interface ILabel {
  color: string;
  name: string;
}

export interface IIssueItemList {
  comments: number;
  labels: ILabel[];
  number: number;
  state: "OPEN" | "CLOSED";
  title: string;
}

export interface IIssueList {
  issueCount: number;
  issues: IIssueItemList[];
}